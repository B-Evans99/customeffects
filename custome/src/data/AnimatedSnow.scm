; GIMP - The GNU Image Manipulation Program
; Copyright (C) 1995 Spencer Kimball and Peter Mattis
;
; This program is free software; you can redistribute it and/or modify
; it under the terms of the GNU General Public License as published by
; the Free Software Foundation; either version 2 of the License, or
; (at your option) any later version.
;
; This program is distributed in the hope that it will be useful,
; but WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
; GNU General Public License for more details.
;
; You should have received a copy of the GNU General Public License
; along with this program; if not, write to the Free Software
; Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
;
;
; Create an animated snowfall effect over an existing background image (must be RGB type)
;
;
; Script can be found under Filters > Animation > Animated Snow...



; Define the Function

(define (script-fu-snow-anim 	img		 
				drawable
				addWhere
				counter
				snowType
				snowAmount
				speed
				flakeSize1
				flakeSize2
				useBlur1
				blurLayer1				
				useBlur2
				blurLayer2
				selection
				addBorder
				borderWidth
				borderColor				
				)

; Declare the Variables

	(let* (
		    	(theSelection 0)
			(theSelection2 0)
			(backgroundLayerCopy 0)		    
			(origSnowLayer1 0)
			(origSnowLayer2 0)
			(origSnowLayer3 0)
			(origSnowLayer4 0)
			(mergeSnowLayer 0)
		    	(copyOrigSnowLayer1 0)							
		    	(copyOrigSnowLayer2 0)
		    	(copyOrigSnowLayer3 0)
		    	(copyOrigSnowLayer4 0)
			(step 0)
			(borderLayer 0)
			(frameNum 1)
			(height 0)
			(activeLayer 0)
			(layerName 0)
			(layerName2 0)
			(x-offset1 0)
			(x-offset2 0)
			(y-offset 0)
			(allLayersRef 0)
			(newImage1 0)
			(newImage2 0)
		)	
(if (= addWhere 0)
	(begin	

(gimp-context-push)
(gimp-image-undo-group-start img)
(set! theSelection (car (gimp-selection-save img)))
(gimp-selection-none img)

(gimp-context-set-background '(255 255 255))


(set! origSnowLayer1 (car (gimp-layer-copy drawable TRUE)))
(gimp-drawable-fill origSnowLayer1 TRANSPARENT-FILL)
(gimp-image-add-layer img origSnowLayer1 -1)
(plug-in-randomize-hurl RUN-NONINTERACTIVE img origSnowLayer1 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer1 0 255)
(plug-in-cubism RUN-NONINTERACTIVE img origSnowLayer1 flakeSize1  0.7 1)

(set! origSnowLayer2 (car (gimp-layer-copy drawable TRUE)))
(gimp-drawable-fill origSnowLayer2 TRANSPARENT-FILL)
(gimp-image-add-layer img origSnowLayer2 -1)
(plug-in-randomize-hurl RUN-NONINTERACTIVE img origSnowLayer2 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer2 0 255)
(plug-in-cubism RUN-NONINTERACTIVE img origSnowLayer2 flakeSize2  0.7 1)

(set! height (car (gimp-drawable-height drawable)))
(set! step (/ height counter))


(while (> counter 0)  

	(if (= snowType 0)
	    (begin	
            (set! x-offset1 (- (random 10) 5))
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	(if (= snowType 2)
	    (begin
	    (set! x-offset1 0)
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	(set! backgroundLayerCopy (car (gimp-layer-copy drawable TRUE)))
	(gimp-image-add-layer img backgroundLayerCopy -1)
	
	(set! copyOrigSnowLayer1 (car (gimp-layer-copy origSnowLayer1 TRUE)))
	(gimp-image-add-layer img copyOrigSnowLayer1 -1)
	(gimp-drawable-offset copyOrigSnowLayer1 TRUE 1 x-offset1 y-offset)
		   
		(if (= useBlur1 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE img copyOrigSnowLayer1 blurLayer1 blurLayer1)
		    )
		)

	(set! copyOrigSnowLayer2 (car (gimp-layer-copy origSnowLayer2 TRUE)))
	(gimp-image-add-layer img copyOrigSnowLayer2 -1)
	(gimp-drawable-offset copyOrigSnowLayer2 TRUE 1 (* -1 x-offset2) y-offset)
		
		(if (= useBlur2 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE img copyOrigSnowLayer2 blurLayer2 blurLayer2)
		    )
		)
	
	(set! copyOrigSnowLayer2 (car (gimp-image-get-active-layer img)))
	(gimp-image-merge-down img copyOrigSnowLayer2 CLIP-TO-IMAGE)
	
	(set! mergeSnowLayer (car (gimp-image-get-active-layer img)))


		(if (= selection TRUE)
		    (begin
		    (gimp-selection-load theSelection)
	   	    (gimp-selection-invert img)
		    (gimp-edit-clear mergeSnowLayer)
		    (gimp-selection-none img)
		    )
		)
	
	(set! activeLayer (car (gimp-image-merge-down img mergeSnowLayer CLIP-TO-IMAGE)))			
	

	(set! activeLayer (car (gimp-image-get-active-layer img)))
	(set! layerName (string-append "Frame " (number->string frameNum) " (" (number->string speed) "ms)" " (replace)"))
	(gimp-drawable-set-name activeLayer layerName)

		(if (= addBorder TRUE)
    			(begin
    			(set! borderLayer (car (gimp-layer-copy activeLayer TRUE)))
			(gimp-image-add-layer img borderLayer -1)
			(gimp-selection-all img)
			(gimp-context-set-foreground borderColor)
			(gimp-drawable-fill borderLayer FOREGROUND-FILL)
			(gimp-selection-shrink img borderWidth)
			(gimp-edit-clear borderLayer)
			(gimp-selection-none img)
			(gimp-image-merge-down img borderLayer CLIP-TO-IMAGE) 
			)
		)


(set! y-offset (+ y-offset step))
(set! frameNum (+ frameNum 1))
(set! counter (- counter 1))

) ; goes with while

; Removes the original layer from the stack because it's no longer needed  
  
(gimp-image-remove-layer img drawable) 
(gimp-image-remove-layer img origSnowLayer1) 
(gimp-image-remove-layer img origSnowLayer2)

(gimp-selection-load theSelection)
(gimp-image-remove-channel img theSelection)

(gimp-image-undo-group-end img)

(gimp-context-pop)

(gimp-displays-flush)

	); goes with begin
); goes with main 'if' = "0"




(if (= addWhere 1)
	(begin	

(gimp-context-push)
(gimp-image-undo-group-start img)
(set! theSelection (car (gimp-selection-save img)))
(gimp-selection-none img)

(gimp-context-set-background '(255 255 255))
(set! counter (car (gimp-image-get-layers img)))
(set! allLayersRef (cadr (gimp-image-get-layers img)))

(set! origSnowLayer1 (car (gimp-layer-copy drawable TRUE)))
(gimp-drawable-fill origSnowLayer1 TRANSPARENT-FILL)
(gimp-image-add-layer img origSnowLayer1 -1)
(plug-in-randomize-hurl RUN-NONINTERACTIVE img origSnowLayer1 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer1 0 255)
(plug-in-cubism RUN-NONINTERACTIVE img origSnowLayer1 flakeSize1  0.7 1)

(set! origSnowLayer2 (car (gimp-layer-copy drawable TRUE)))
(gimp-drawable-fill origSnowLayer2 TRANSPARENT-FILL)
(gimp-image-add-layer img origSnowLayer2 -1)
(plug-in-randomize-hurl RUN-NONINTERACTIVE img origSnowLayer2 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer2 0 255)
(plug-in-cubism RUN-NONINTERACTIVE img origSnowLayer2 flakeSize2  0.7 1)

(set! height (car (gimp-drawable-height drawable)))
(set! step (/ height counter))


(while (> counter 0)  

	(if (= snowType 0)
	    (begin	
            (set! x-offset1 (- (random 10) 5))
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	(if (= snowType 2)
	    (begin
	    (set! x-offset1 0)
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	(set! backgroundLayerCopy (car (gimp-image-set-active-layer img (aref allLayersRef (- counter 1)))))
	(set! activeLayer (car (gimp-image-get-active-layer img))) 
	
	(set! copyOrigSnowLayer1 (car (gimp-layer-copy origSnowLayer1 TRUE)))
	(gimp-image-add-layer img copyOrigSnowLayer1 -1)
	(gimp-drawable-offset copyOrigSnowLayer1 TRUE 1 x-offset1 y-offset)
		   
		(if (= useBlur1 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE img copyOrigSnowLayer1 blurLayer1 blurLayer1)
		    )
		)

	(set! copyOrigSnowLayer2 (car (gimp-layer-copy origSnowLayer2 TRUE)))
	(gimp-image-add-layer img copyOrigSnowLayer2 -1)
	(gimp-drawable-offset copyOrigSnowLayer2 TRUE 1 (* -1 x-offset2) y-offset)
		
		(if (= useBlur2 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE img copyOrigSnowLayer2 blurLayer2 blurLayer2)
		    )
		)
	
		
	(set! copyOrigSnowLayer2 (car (gimp-image-get-active-layer img)))
	(gimp-image-merge-down img copyOrigSnowLayer2 CLIP-TO-IMAGE)
	
	(set! mergeSnowLayer (car (gimp-image-get-active-layer img)))


		(if (= selection TRUE)
		    (begin
		    (gimp-selection-load theSelection)
	   	    (gimp-selection-invert img)
		    (gimp-edit-clear mergeSnowLayer)
		    (gimp-selection-none img)
		    )
		)
	
	(set! activeLayer (car (gimp-image-merge-down img mergeSnowLayer CLIP-TO-IMAGE)))			

	(set! activeLayer (car (gimp-image-get-active-layer img)))

		(if (= addBorder TRUE)
    			(begin
    			(set! borderLayer (car (gimp-layer-copy activeLayer TRUE)))
			(gimp-image-add-layer img borderLayer -1)
			(gimp-selection-all img)
			(gimp-context-set-foreground borderColor)
			(gimp-drawable-fill borderLayer FOREGROUND-FILL)
			(gimp-selection-shrink img borderWidth)
			(gimp-edit-clear borderLayer)
			(gimp-selection-none img)
			(gimp-image-merge-down img borderLayer CLIP-TO-IMAGE) 
			)
		)


(set! y-offset (+ y-offset step))
(set! counter (- counter 1))

) ; goes with while

; Removes the original layer from the stack because it's no longer needed  
  
(gimp-image-remove-layer img origSnowLayer1) 
(gimp-image-remove-layer img origSnowLayer2)

(gimp-selection-load theSelection)
(gimp-image-remove-channel img theSelection)

(gimp-image-undo-group-end img)

(gimp-context-pop)

(gimp-displays-flush)

	); goes with begin
); goes with main 'if' = "1"


(if (= addWhere 2)
	(begin	

(gimp-context-push)
(set! newImage1 (car (gimp-image-duplicate img)))
(set! newImage2 (car (gimp-image-duplicate img)))
(gimp-image-undo-disable newImage1)
(gimp-image-undo-disable newImage2)
(gimp-display-new newImage1)
(gimp-display-new newImage2)

(gimp-context-set-background '(255 255 255))

(set! origSnowLayer1 (car (gimp-image-get-active-layer newImage1)))
(gimp-layer-add-alpha origSnowLayer1)
(gimp-drawable-fill origSnowLayer1 TRANSPARENT-FILL)
(plug-in-randomize-hurl RUN-NONINTERACTIVE newImage1 origSnowLayer1 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer1 0 255)
(plug-in-cubism RUN-NONINTERACTIVE newImage1 origSnowLayer1 flakeSize1  0.7 1)

(set! origSnowLayer2 (car (gimp-image-get-active-layer newImage2)))
(gimp-layer-add-alpha origSnowLayer2)
(gimp-drawable-fill origSnowLayer2 TRANSPARENT-FILL)
(plug-in-randomize-hurl RUN-NONINTERACTIVE newImage2 origSnowLayer2 snowAmount 1.0 TRUE TRUE)	
(gimp-threshold origSnowLayer2 0 255)
(plug-in-cubism RUN-NONINTERACTIVE newImage2 origSnowLayer2 flakeSize2  0.7 1)

(gimp-displays-flush)
(set! height (car (gimp-drawable-height drawable)))
(set! step (/ height counter))

(set! theSelection (car (gimp-selection-save newImage1)))
(set! theSelection2 (car (gimp-selection-save newImage2)))
(gimp-selection-none newImage1)
(gimp-selection-none newImage2)


(while (> counter 0)  

	(if (= snowType 0)
	    (begin	
            (set! x-offset1 (- (random 10) 5))
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	(if (= snowType 2)
	    (begin
	    (set! x-offset1 0)
	    (set! x-offset2 (- (random 10) 5))
	    )
	)

	
	(set! copyOrigSnowLayer1 (car (gimp-layer-copy origSnowLayer1 TRUE)))
	(gimp-image-add-layer newImage1 copyOrigSnowLayer1 -1)
	(set! layerName (string-append "Snow Layer 1 - Frame " (number->string frameNum) " (" (number->string speed) "ms)" " (replace)"))
	(gimp-drawable-set-name copyOrigSnowLayer1 layerName)
	(gimp-drawable-offset copyOrigSnowLayer1 TRUE 1 x-offset1 y-offset)
		   
		(if (= useBlur1 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE newImage1 copyOrigSnowLayer1 blurLayer1 blurLayer1)
		    )
		)

	(set! copyOrigSnowLayer2 (car (gimp-layer-copy origSnowLayer2 TRUE)))
	(gimp-image-add-layer newImage2 copyOrigSnowLayer2 -1)
	(set! layerName2 (string-append "Snow Layer 2 - Frame " (number->string frameNum) " (" (number->string speed) "ms)" " (replace)"))
	(gimp-drawable-set-name copyOrigSnowLayer2 layerName2)
	(gimp-drawable-offset copyOrigSnowLayer2 TRUE 1 (* -1 x-offset2) y-offset)
		
		(if (= useBlur2 TRUE)
    		    (begin
	            (plug-in-gauss-rle2 RUN-NONINTERACTIVE newImage2 copyOrigSnowLayer2 blurLayer2 blurLayer2)
		    )
		)
	
		(if (= selection TRUE)
		    (begin
		    (gimp-selection-load theSelection)
	   	    (gimp-selection-invert newImage1)
		    (gimp-edit-clear copyOrigSnowLayer1)
		    (gimp-selection-none newImage1)
		    (gimp-selection-load theSelection2)
	   	    (gimp-selection-invert newImage2)
		    (gimp-edit-clear copyOrigSnowLayer2)
		    (gimp-selection-none newImage2)
		    )
		)
	
		


	
(set! y-offset (+ y-offset step))
(set! frameNum (+ frameNum 1))
(set! counter (- counter 1))

) ; goes with while

; Removes the original layer from the stack because it's no longer needed  
  
(gimp-image-remove-layer newImage1 origSnowLayer1) 
(gimp-image-remove-layer newImage2 origSnowLayer2)

(gimp-selection-load theSelection)
(gimp-image-remove-channel newImage1 theSelection)
(gimp-selection-load theSelection2)
(gimp-image-remove-channel newImage2 theSelection2)
(gimp-image-undo-enable newImage1)
(gimp-image-undo-enable newImage2)
(gimp-context-pop)

(gimp-displays-flush)

	); goes with begin
); goes with main 'if' = "2"








  )
)

(script-fu-register "script-fu-snow-anim"
  "<Image>/Filters/Animation/Animators/Animated Snow..."
  "Create an animated snow effect"
  "Art Wade"
  "Art Wade"
  "November 26, 2009"
  "RGB*"
  SF-IMAGE       	"Image" 0
  SF-DRAWABLE    	"Drawable" 0
  SF-OPTION		"Add Snowfall to:" 		'("Single Image" 
							  "Existing Animation (must be RGB format)"
							  "2 Separate Snowfall Layers Without Combining Background Image (For GAP Users)")
  SF-ADJUSTMENT 	"Number of Frames (not used if adding snow to an existing animation)" '(15 1 50 1 10 0 1)
  SF-OPTION		"Snowfall Type" 		'("Random" 
							  "Straight Down"
							  "Combined Random and Straight Down")
  SF-ADJUSTMENT 	"Snow Amount" '(10 1 60 1 1 0 1)
  SF-ADJUSTMENT 	"Snowfall Speed (in ms) (Not used when adding snow to existing animation)" '(150 10 500 1 1 0 1)
  SF-ADJUSTMENT 	"Snowflake Size Layer 1" '(2.0 1.0 15.0 1 1 1 1)
  SF-ADJUSTMENT 	"Snowflake Size Layer 2" '(4.0 1.0 15.0 1 1 1 1)
  SF-TOGGLE      	"Blur Snowflake Layer 1?" TRUE 
  SF-ADJUSTMENT 	"Blur Amount Snowflake Layer 1" '(0.5 0.1 20.0 1 1 1 1)  
  SF-TOGGLE       "Blur Snowflake Layer 2?" TRUE 
  SF-ADJUSTMENT 	"Blur Amount Snowflake Layer 2" '(0.5 0.1 20.0 1 1 1 1)
  SF-TOGGLE       	"Keep selection? (Limits snow to selection)" FALSE 
  SF-TOGGLE       	"Add Border? (Not used when creating 2 separate snowfall layers)" FALSE
  SF-ADJUSTMENT   	"Border Width" '(1 1 10 1 1 0 1)
  SF-COLOR        	"Border Color" '(255 255 255)
)


                         
