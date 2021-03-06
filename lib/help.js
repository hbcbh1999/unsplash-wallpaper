module.exports = `
    latest

        Get the latest image.
        example:
        $ unsplash-wallpaper latest

    random

        Get a random image.
        example:
        $ unsplash-wallpaper random

    -w, --width {Number}

        Set the width of desired download.

    -h, --height {Number}

        Set the height of desired download.

    -d, --dir {String} or "."

        Download the image to a specific directory.
        "." uses the current working directory.
        "./" stores the current working directory even when it changes.
        example:
        $ unsplash-wallpaper --dir "/Users/Shared"
        $ unsplash-wallpaper --dir "C:UsersPublic"
        $ unsplash-wallpaper -d .

    -s, --save-config

        Saves any width, height or dir value in a config file.
        example:
        $ unsplash-wallpaper random -s --width 1600 --height 1200

    -i, --image {Number}

        Get a specific unsplash image if you know the number.
        (https://unsplash.it/images)
        example:
        $ unsplash-wallpaper -i 580

    -x, --gravity "north|east|south|west|center"

        Choose the direction to crop.
        example:
        $ unsplash-wallpaper --image 327 --gravity south

    -g, --grayscale

    -b, --blur

    -v, --version
`;
