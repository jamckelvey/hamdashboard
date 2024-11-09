const topBarCenterText = `K4MKE - EM96uc`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  // Left Side
  ["add10d", "BACK", "#", "1"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "Open Spot", "http://192.168.50.206/#status", "1"],
  [
    "2196F3",
    "JS8 ACTIVITY",
    "https://www.pskreporter.info/pskmap.html?preset&callsign=K4MKE&mode=JS8&timerange=10800&hidelines=1&textalwaysblack=1&mapCenter=6.693387699871266,-58.41097275008994,2.72345939923975",
    "1",
  ],
  ["2196F3", "APRS", "https://aprs.to/?center=36.0777,-80.1377&zoom=11", "1.0"],
  ["2196F3", "YAAC APRS", "http://192.168.50.4:8008/", "1"],
  ["2196F3", "POTA", "https://pota.app/#/", "1"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1"],
  ["2196F3", "REVERSE BCN", "https://reversebeacon.net/main.php?rows=50", "1"],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "TIME.IS", "https://time.is/", "1"],
  [
    "2196F3",
    "HAM BANDS",
    "https://hamradioprepper.com/wp-content/uploads/2020/02/arrlbands.jpg",
    "1",
  ],

  // Right Side
  ["add10d", "BACK", "#", "1", "R"],
  [
    "E1341E",
    "LIGHTNING",
    "https://map.blitzortung.org/#7.5/35.65/-80.174",
    "1",
    "R",
  ],
  [
    "E1341E",
    "RADAR",
    "https://s.w-x.co/staticmaps/wu/wu/wxtype1200_cur/usclt/animate.png",
    "1",
    "R",
  ],
  [
    "E1341E",
    "AVIATION",
    "https://aviationweather.gov/gfa/?center=35.003,-83.606&zoom=6",
    "1",
    "R",
  ],
  [
    "E1341E",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-88.91,35.98,2274",
    "1",
    "R",
  ],
  ["E1341E", "SPACE WEATHER", "https://www.spaceweather.com", "1", "R"],
  [
    "C700FF",
    "TRAFFIC",
    "https://drivenc.gov/?ref=share&type=county&id=Forsyth&layers=congestion&pins=incidents_road-work,incidents_other-incidents,roads_interstate,roads_us,roads_nc",
    "1",
    "R",
  ],
  [
    "FFD100",
    "ADSB",
    "http://globe.adsbexchange.com/?airport=KGSO", //&enableLabels&extendedLabels=1
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  // Line 1
  [
    "",
    "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
    "https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif",
    //"https://www.spc.noaa.gov/products/watch/validww.png",
    "https://www.weather.gov/wwamap/png/US.png",
    "https://www.spc.noaa.gov/climo/reports/today.gif",
    "https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
    "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=EDT&sector=CONUS&element=maxt&n=1",
    "https://droughtmonitor.unl.edu/data/png/current/current_usdm.png",
  ],
  // [
  //   "US RADAR",
  //   "https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  // ],
  [
    "REGIONAL RADAR",
    "https://s.w-x.co/staticmaps/wu/wu/wxtype1200_cur/usclt/animate.png",
  ],
  [
    "FORECAST",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=EDT&sector=MIDATLANTIC&element=pop12&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=EDT&sector=MIDATLANTIC&element=MaxT&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=EDT&sector=MIDATLANTIC&element=windspd&n=3",
  ],
  [
    "Tropical Outlook",
    //"https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/Sandwich/GOES16-CONUS-Sandwich-625x375.gif",
  ],

  // Line 2
  [
    "Univ-Reasearch-MLK-High Pt",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=UnivPkwy_NofOakSummit.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=UnivPkwy_Bethabara.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=MLK_ResearchPkwy.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=MLK_BowmanGray.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=HP-MainSt_WardAve.jpg&t=1731187065624",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=HP-GreenDr_WrennSt.jpg&t=1731187140275",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=HP-MainSt_HighAve.jpg&t=1731187178756",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=HP-CollegeDr_LexingtonAve.jpg&t=1731187202624",
  ],
  [
    "BUS 40/421",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_SalemLake.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=Bus40_Linville.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_SandyRidge.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_NC68.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_MainSt.jpg&",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_BroadSt.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_US52.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_SilasCreekPkwy.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US421_I74Beltway_N.jpg",
  ],
  [
    "I-40",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_LewisvilleClemmonsRd.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_McGregorRd.jpg&t=1731186773440",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_Jonestown.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_PetersCreek.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_SilasCreek.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_I40.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_mm196.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_ChimneyRock.jpg",
  ],
  [
    "US 52",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_Univ.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_25th.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_RamsNB.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_MLK.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_SalemCreek.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52S_ResearchPkwyW.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_Mock.jpg",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_Clemmonsville.jpg&t=1731186344166",
    "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=US52_103MainSt.jpg&t=1731186381135",
  ],

  // Line 3
  [
    //"NOAA D-RAP",
    //"https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
    "",
    // Newsmax 2 - feeds stop playing randomly
    //"iframe|https://www.youtube.com/embed/ANDE3adJUzs?si=GkPx7ONiI24MsaL0&autoplay=1&mute=1",
    //"iframe|https://rumble.com/embed/v3qehjc/?pub=jm0dx&autoplay=2",
    // Fox
    "iframe|https://www.youtube.com/embed/YDfiTGGPYCk?si=LbNNIitaKjPWrOmB&autoplay=1&mute=1",
  ],
  [
    "",
    //"https://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=52.67|-21.96|-15.53|-9.42|-17.76|-17.53|46.34|50.73|42.81|39.75|50.89|29.60|6.23|39.40|-15.53|43.51|46.34|-21.96|34.38|44.15|39.36|46.34|39.91|39.91|46.34|27.46|24.88|27.46|36.28|39.36|42.04|36.28|36.21|12.69|18.22|24.17|42.04|29.60|-15.73|-7.90|36.21|12.69|36.21|29.15|30.65|-21.96|33.50|-38.83|36.28|36.21|27.46&lon=9.75|27.60|28.00|160.05|168.36|146.05|-67.83|4.39|23.19|116.81|-113.85|55.79|-10.70|32.86|28.00|-79.63|-67.83|27.64|108.61|86.90|75.72|-67.83|-76.58|-76.58|-67.83|-80.93|102.50|-80.93|-86.10|75.72|12.32|-86.10|-86.89|-8.02|-63.02|54.25|12.32|55.79|46.45|-14.38|-86.89|-8.02|-86.89|47.77|-87.09|27.64|-86.47|176.42|-86.10|-86.89|-80.93&freq=3975|4930|4965|5020|5040|5055|5130|5780|5900|5985|6030|6040|6050|6050|6065|6070|6160|6195|7285|7295|7415|7490|9265|9265|9330|9395|9440|9455|9475|9600|9705|9930|9980|11640|11775|11810|11870|11880|11965|12095|12160|13630|13845|15540|15555|15580|15610|15720|15810|15825|17790&az=ND|20|ND|ND|ND|ND|245|ND|126|257|ND|313|ND|310|315|ND|245|350|317|270|308|245|242|242|245|355|283|285|50|308|206|180|90|111|320|90|210|211|295|27|85|111|90|310|5|350|85|35|40|46|160",
    //"http://www.hamqsl.com/solarmuf.php",
    // See https://prop.kc2g.com/about/
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
    "https://prop.kc2g.com/renders/current/fof2-normal-now.svg",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
  ],
  [
    "",
    "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tonights_static_viewline_forecast.png",
    "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tomorrow_nights_static_viewline_forecast.png",
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php",
    //"https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarbc.php",
    //"https://www.hamqsl.com/solarpich.php",
    "https://www.hamqsl.com/solarsun.php",
    "https://spaceweather.bradford.ac.uk/ASAP_latest/flaremonitor_24.png",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [
  // line 1
  12200, 10000, 11000, 14100,
  // line 2
  20200, 20500, 20300, 20600,
  // line 3
  900000, 15700, 10900, 15800,
];
