from gimpfu import *
import shutil
import os

def custom_effects(file):
    
    #get source directory
    src = os.path.realpath(file)

    #get destination directory
    path = os.path.dirname(os.path.realpath(__file__))
    directory = path.split("plug-ins")[0] 
    dest = directory + "\\scripts"

    #copy file to new location
    shutil.copy(src, dest)

    pdb.gimp_message("Script loaded. Please close and reopen GIMP to use the script")
    
    return

register(
        "python_fu_custom_effects",
        "Custom Effects Installer",
        "Displays the custome effects installer",
        "Seeking Regina George", 
        "Copyright Seeking Regina George", 
        "2020",
        "Custom-Effects",
        "RGB*, GRAY*",
        [
            (PF_FILENAME, "file", "Choose File:", "")
        ],
        [],
        custom_effects,
        menu="<Image>/Filters/"
)

main()

