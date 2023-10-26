Function display_weather_chart  (longitude,latitude);  {
    const image  : HTMLImageElement = document.createElement("img")
    image.src = "https://www.7timer.info/bin/civil.php" + Longitude + "&Lat" + Latitude
    document.body.appendChild(image)
}

display_weather_chart( longitude, 2.333333, latitude, 48.866667)