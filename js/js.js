console.log("js linked")

document.querySelector("#hamburger").addEventListener("click", function() {
    console.log("hamburger clicked")
    display_status = document.querySelector("#nav_one").style.display

    if (display_status == "block") {
        document.querySelector("#nav_one").style.display = "none"
        document.querySelector("#hamburger").style.border = "none"
        document.querySelector("#hamburger").style.padding = "none"

    }
    else {
        document.querySelector("#nav_one").style.display = "block"
        document.querySelector("#hamburger").style.border = "2px #000 solid"
        document.querySelector("#hamburger").style.padding = "2px"
    }
})

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Orthographic();
chart.panBehavior = "rotateLongLat";
chart.deltaLatitude = -20;
chart.padding(20,20,20,20);

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
//polygonSeries.include = ["BR", "UA", "MX", "CI"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#909E8E");
polygonTemplate.stroke = am4core.color("#C5D1BF");
polygonTemplate.strokeWidth = 0.5;
polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
polygonTemplate.urlTarget = "_blank";

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#000");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
graticuleSeries.fitExtent = false;


chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#000");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
setTimeout(function(){
  animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function(){
//  animation.stop();
})
