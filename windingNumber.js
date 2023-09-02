
      // Constraint coordinates
      let coordinatesMain = {
        Merchant: [
          { lat: 19.996682, lon: 73.799731 },
          { lat: 19.996714, lon: 73.801426 },
          { lat: 19.995666, lon: 73.801828 },
          { lat: 19.99515, lon: 73.800746 },
          { lat: 19.995268, lon: 73.799965 },
          { lat: 19.995855, lon: 73.799341 },
        ],
        MerchantMain: [
          // will prevent checkCoordinates to run, compromising argument of for loop
          { lat: 19.994623, lon: 73.800079 },
          { lat: 19.994650226440793, lon: 73.79996441523502 },
          { lat: 19.99466471952598, lon: 73.79996977966589 },
          { lat: 19.99468110305855, lon: 73.79991211217937 },
          { lat: 19.99475041782321, lon: 73.7999295465904 },
          { lat: 19.994731513762865, lon: 73.80001470670702 },
          { lat: 19.994747897244796, lon: 73.80002476501116 },
          { lat: 19.99472836299738, lon: 73.8001052313056 },
        ],
        Kanaskar: [
          { lat: 19.96790994843821, lon: 73.7730528254957 },
          { lat: 19.967866461757954, lon: 73.77320772297308 },
          { lat: 19.967991879711875, lon: 73.77324527399722 },
          { lat: 19.968033475690262, lon: 73.77309305861691 },
          { lat: 19.967889150481124, lon: 73.77312524510177 },
          { lat: 19.967928855616915, lon: 73.7732264984755 },
          { lat: 19.968004484570923, lon: 73.77319431202272 },
          { lat: 19.968024652311335, lon: 73.7731239040281 },
          { lat: 19.967972342307114, lon: 73.77307294204887 },
        ],
        Gosavi: [
          { lat: 19.974633955891854, lon: 73.80387357790094 },
          { lat: 19.97462324226405, lon: 73.80392789262612 },
          { lat: 19.974610637974813, lon: 73.80399092451864 },
          { lat: 19.97468500326386, lon: 73.8040090294504 },
          { lat: 19.97476251962993, lon: 73.8040237816401 },
          { lat: 19.974774493715366, lon: 73.80396745521432 },
          { lat: 19.97471210248107, lon: 73.80389101222612 },
        ],
        College: [
          { lat: 19.956921794761133, lon: 73.77868969298251 },
          { lat: 19.956956069861626, lon: 73.77853594972446 },
          { lat: 19.956984786769866, lon: 73.77853890632977 },
          { lat: 19.956995902991203, lon: 73.77848765855731 },
          { lat: 19.95697089148825, lon: 73.77848174535889 },
          { lat: 19.95699868195276, lon: 73.7783289875439 },
          { lat: 19.95702554622792, lon: 73.77818115757569 },
          { lat: 19.95704777865833, lon: 73.77818608524018 },
          { lat: 19.957066305672434, lon: 73.77814173621174 },
          { lat: 19.957119107694783, lon: 73.77814567832583 },
          { lat: 19.957131150272684, lon: 73.77818904183037 },
          { lat: 19.957210816476305, lon: 73.77813385186577 },
          { lat: 19.95728121894517, lon: 73.77824028957991 },
          { lat: 19.95738311749021, lon: 73.77841472910013 },
          { lat: 19.95750261654924, lon: 73.77860592302504 },
          { lat: 19.957482236916345, lon: 73.77870546139636 },
          { lat: 19.957462783584635, lon: 73.77880302937461 },
          { lat: 19.957334947287713, lon: 73.77877839101889 },
          { lat: 19.95722285895256, lon: 73.7787468539388 },
          { lat: 19.95717932050799, lon: 73.7787438973462 },
          { lat: 19.957004240163794, lon: 73.77870743261718 },
          { lat: 19.95692179490927, lon: 73.77868969304508 },
        ],
      };
      // Use to address Users
      var userList = ['Mustafa Merchant', 'Mustafa Merchant', 'Harshal Kanaskar','Harshal Gosavi','GGSP']; 
      // const constraintCoordinatesOfMerchant= [
      //     // will prevent checkCoordinates to run, compromising argument of for loop
      //     { lat: 19.996682, lon: 73.799731 },
      //     { lat: 19.996714, lon: 73.801426 },
      //     { lat: 19.995666, lon: 73.801828 },
      //     { lat: 19.99515, lon: 73.800746 },
      //     { lat: 19.995268, lon: 73.799965 },
      //     { lat: 19.995855, lon: 73.799341 },
      //   ];
      //   const constraintCoordinatesOfMerchantORG = [
      //     // will prevent checkCoordinates to run, compromising argument of for loop
      //     { lat: 19.994623, lon: 73.800079 },
      //     { lat: 19.994650226440793, lon: 73.79996441523502 },
      //     { lat: 19.99466471952598, lon: 73.79996977966589 },
      //     { lat: 19.99468110305855, lon: 73.79991211217937 },
      //     { lat: 19.99475041782321, lon: 73.7999295465904 },
      //     { lat: 19.994731513762865, lon: 73.80001470670702 },
      //     { lat: 19.994747897244796, lon: 73.80002476501116 },
      //     { lat: 19.99472836299738, lon: 73.8001052313056 },
      //   ];
      //   const constraintCoordinatesOfKanaskar = [
      //     { lat: 19.96790994843821, lon: 73.7730528254957 },
      //     { lat: 19.967866461757954,lon:  73.77320772297308 },
      //     { lat: 19.967991879711875,lon:  73.77324527399722},
      //     { lat: 19.968033475690262,lon:  73.77309305861691},
      //     { lat: 19.967889150481124,lon:  73.77312524510177 },
      //     { lat: 19.967928855616915,lon:  73.7732264984755 },
      //     { lat: 19.968004484570923,lon:  73.77319431202272 },
      //     { lat: 19.968024652311335,lon:  73.7731239040281 },
      //     { lat: 19.967972342307114,lon:  73.77307294204887 },
      //   ];
      //   const constraintCoordinatesOfGosavi = [
      //     { lat: 19.974633955891854,lon:  73.80387357790094},
      //     { lat: 19.97462324226405, lon: 73.80392789262612},
      //     { lat: 19.974610637974813,lon:  73.80399092451864},
      //     { lat: 19.97468500326386, lon: 73.8040090294504 },
      //     { lat: 19.97476251962993, lon: 73.8040237816401 },
      //     { lat: 19.974774493715366,lon:  73.80396745521432},
      //     { lat: 19.97471210248107, lon: 73.80389101222612},
      //   ];
      //   const constraintCoordinatesOfCollege = [
      //     { lat: 19.956921794761133, lon: 73.77868969298251},
      //     { lat: 19.956956069861626, lon: 73.77853594972446},
      //     { lat: 19.956984786769866, lon: 73.77853890632977},
      //     { lat: 19.956995902991203, lon: 73.77848765855731 },
      //     { lat: 19.95697089148825, lon: 73.77848174535889},
      //     { lat: 19.95699868195276, lon: 73.7783289875439},
      //     { lat: 19.95702554622792, lon: 73.77818115757569},
      //     { lat: 19.95704777865833, lon: 73.77818608524018},
      //     { lat: 19.957066305672434, lon: 73.77814173621174},
      //     { lat: 19.957119107694783, lon: 73.77814567832583},
      //     { lat: 19.957131150272684, lon: 73.77818904183037},
      //     { lat: 19.957210816476305, lon: 73.77813385186577},
      //     { lat: 19.95728121894517, lon: 73.77824028957991},
      //     { lat: 19.95738311749021, lon: 73.77841472910013},
      //     { lat: 19.95750261654924, lon: 73.77860592302504},
      //     { lat: 19.957482236916345, lon: 73.77870546139636},
      //     { lat: 19.957462783584635, lon: 73.77880302937461},
      //     { lat: 19.957334947287713, lon: 73.77877839101889},
      //     { lat: 19.95722285895256, lon: 73.7787468539388},
      //     { lat: 19.95717932050799, lon: 73.7787438973462},
      //     { lat: 19.957004240163794, lon: 73.77870743261718},
      //     { lat: 19.95692179490927, lon: 73.77868969304508},
      //   ];

      // const threshold = 0.001;
      var marker = null;

      let mer = document.getElementById("merchant");
      let college = document.getElementById("clg");
      let kan = document.getElementById("kanaskar");
      let gos = document.getElementById("gosavi");
      let random = document.getElementById("randomly");
      //   let access = document.getElementById("access");
      
      document.getElementById("access").addEventListener("click",function(){
        const toast = new bootstrap.Toast(document.getElementById("liveToast"));
        setTimeout(() => {
            toast.show();
        }, 1500);
        AccessLocation();
    });
    
    document.getElementById("refresh").addEventListener("click", ()=>{
        location.reload();
      });

      mer.addEventListener("click", function () {
        ShowUserLocationInCoordinate(coordinatesMain.MerchantMain);
      });
      college.addEventListener("click", function () {
        ShowUserLocationInCoordinate(coordinatesMain.College);
      });
      kan.addEventListener("click", function () {
        ShowUserLocationInCoordinate(coordinatesMain.Kanaskar);
      });
      gos.addEventListener("click", function () {
        ShowUserLocationInCoordinate(coordinatesMain.Gosavi);
      });
      random.addEventListener("click", function () {
        ShowUserLocationInCoordinate(coordinatesMain.Random);
      });

//AccessLocation function to calculate Location

      function AccessLocation() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              };
              document.getElementById("latitude").textContent =
                "Latitude: " + userLocation.lat;
              document.getElementById("longitude").textContent =
                "Longitude: " + userLocation.lon;
              const googleMapsLink = `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lon}`;
              document.getElementById(
                "google-maps-link"
              ).innerHTML = `<a href="${googleMapsLink}" target="_blank">View on Google Maps</a>`;

              ((g) => {
                var h,
                  a,
                  k,
                  p = "The Google Maps JavaScript API",
                  c = "google",
                  l = "importLibrary",
                  q = "__ib__",
                  m = document,
                  b = window;
                b = b[c] || (b[c] = {});
                var d = b.maps || (b.maps = {}),
                  r = new Set(),
                  e = new URLSearchParams(),
                  u = () =>
                    h ||
                    (h = new Promise(async (f, n) => {
                      await (a = m.createElement("script"));
                      e.set("libraries", [...r] + "");
                      for (k in g)
                        e.set(
                          k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                          g[k]
                        );
                      e.set("callback", c + ".maps." + q);
                      a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                      d[q] = f;
                      a.onerror = () => (h = n(Error(p + " could not load.")));
                      a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                      m.head.append(a);
                    }));
                d[l]
                  ? console.warn(p + " only loads once. Ignoring:", g)
                  : (d[l] = (f, ...n) =>
                      r.add(f) && u().then(() => d[l](f, ...n)));
              })({
                key: "AIzaSyCNAwtqMaWIndTJRMLRC7Yw0GTWRSyy0h4",
                v: "weekly",
                // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
                // Add other bootstrap parameters as needed, using camel case.
              });

              // Initialize and add the map
              let map;
              async function initMap() {
                // The location of User
                const position = { lat: userLocation.lat, lng: userLocation.lon};
                // Request needed libraries.
                //@ts-ignore
                const { Map } = await google.maps.importLibrary("maps");
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

                // The map, centered at User's Location
                map = new Map(document.getElementById("map"), {
                  zoom: 19,
                  center: position,
                  mapId: "Location",
                  disableDefaultUI: true,
                });

                // The marker, positioned at user's current location
                let marker = new AdvancedMarkerElement({
                  map: map,
                  position: position,
                  title: "Your Current Location",
                });
                //if (marker !== null) {
                //  marker.setLatLng([userLocation.lat,userLocation.lon]);
                //}
                //map.clearOverlays();
                //map.addOverlay(AdvancedMarkerElement);
              }

              initMap();
              
            },
            (error) => {
              alert("Error getting your location: " + error.message);
            }
          );
        } else {
          alert("Geolocation is not available in your browser.");
        }
      }

      function ShowUserLocationInCoordinate(constraintCoordinate) {
        function isPointInPolygon(point, polygon) {
            const x = point.lat, y = point.lon;
            let windingNumber = 0;
        
            for (let i = 0; i < polygon.length; i++) {
                const xi = polygon[i].lat, yi = polygon[i].lon;
                const xj = polygon[(i + 1) % polygon.length].lat, yj = polygon[(i + 1) % polygon.length].lon;
        
                if (yi <= y) {
                    if (yj > y && isLeft(xi, yi, xj, yj, x, y) > 0) {
                        windingNumber++;
                    }
                } else if (yj <= y && isLeft(xi, yi, xj, yj, x, y) < 0) {
                    windingNumber--;
                }
            }
        
            return windingNumber !== 0;
        }
        
        function isLeft(x0, y0, x1, y1, x, y) {
            return (x1 - x0) * (y - y0) - (x - x0) * (y1 - y0);
        }
        
        function checkLocation() {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const userLocation = {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                };
                const isInsideStore = isPointInPolygon(
                  userLocation,
                  constraintCoordinate
                );

                document.getElementById("latitude").textContent =
                  "Latitude: " + userLocation.lat;
                document.getElementById("longitude").textContent =
                  "Longitude: " + userLocation.lon;
                const googleMapsLink = `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lon}`;
                document.getElementById(
                  "google-maps-link"
                ).innerHTML = `<a href="${googleMapsLink}" target="_blank">View on Google Maps</a>`;

                if (isInsideStore) {
                  alert(`Inside of Co-ordinates`);
                } else {
                  alert(`Outside of Co-ordinates`);
                }
                ((g) => {
                  var h,
                    a,
                    k,
                    p = "The Google Maps JavaScript API",
                    c = "google",
                    l = "importLibrary",
                    q = "__ib__",
                    m = document,
                    b = window;
                  b = b[c] || (b[c] = {});
                  var d = b.maps || (b.maps = {}),
                    r = new Set(),
                    e = new URLSearchParams(),
                    u = () =>
                      h ||
                      (h = new Promise(async (f, n) => {
                        await (a = m.createElement("script"));
                        e.set("libraries", [...r] + "");
                        for (k in g)
                          e.set(
                            k.replace(
                              /[A-Z]/g,
                              (t) => "_" + t[0].toLowerCase()
                            ),
                            g[k]
                          );
                        e.set("callback", c + ".maps." + q);
                        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                        d[q] = f;
                        a.onerror = () =>
                          (h = n(Error(p + " could not load.")));
                        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                        m.head.append(a);
                      }));
                  d[l]
                    ? console.warn(p + " only loads once. Ignoring:", g)
                    : (d[l] = (f, ...n) =>
                        r.add(f) && u().then(() => d[l](f, ...n)));
                })({
                  key: "AIzaSyCNAwtqMaWIndTJRMLRC7Yw0GTWRSyy0h4",
                  v: "weekly",
                  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
                  // Add other bootstrap parameters as needed, using camel case.
                });

                // Initialize and add the map
                let map;
                async function initMap() {
                  // The location of User
                  const position = {
                    lat: userLocation.lat,
                    lng: userLocation.lon,
                  };
                  // Request needed libraries.
                  //@ts-ignore
                  const { Map } = await google.maps.importLibrary("maps");
                  const { AdvancedMarkerElement } =
                    await google.maps.importLibrary("marker");

                  // The map, centered at User's Location
                  map = new Map(document.getElementById("map"), {
                    zoom: 40,
                    center: position,
                    mapId: "Location",
                    disableDefaultUI: true,
                  });

                  // The marker, positioned at user's current location
                  let marker = new AdvancedMarkerElement({
                    map: map,
                    position: position,
                    title: "Your Current Location",
                  });
                  //if (marker !== null) {
                  //  marker.setLatLng([userLocation.lat,userLocation.lon]);
                  //}
                  //map.clearOverlays();
                  //map.addOverlay(AdvancedMarkerElement);
                }

                initMap();
              },
              (error) => {
                alert("Error getting your location: " + error.message);
              }
            );
          } else {
            alert("Geolocation is not available in your browser.");
          }
        }

        // Check the user's location periodically (e.g., every 10 seconds)
        //setInterval(checkLocation, 1000);

        // Initial check when the page loads
        checkLocation();
      }



// function validateUserCollege() {
// function isPointInPolygon(point, polygon) {
//     const x = point.lat, y = point.lon;
//     let isInside = false;

//     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
//         const xi = polygon[i].lat, yi = polygon[i].lon;
//         const xj = polygon[j].lat, yj = polygon[j].lon;

//         const intersect = ((yi > y) !== (yj > y)) &&
//             (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);

//         if (intersect) isInside = !isInside;
//     }

//     return isInside;
// }
// function checkLocation() {
//     if ("geolocation" in navigator){
//         navigator.geolocation.getCurrentPosition(position => {
//             const userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
//             const isInsideStore = isPointInPolygon(userLocation, constraintCoordinatesOfCollege);

//             document.getElementById("latitude").textContent = "Latitude: " + userLocation.lat;
//             document.getElementById("longitude").textContent = "Longitude: " +  userLocation.lon;

//             if (isInsideStore) {
//             alert("Inside of GGSP, Nashik");
//             } else {
//             alert("Outside of the GGSP, Nashik");
//             }
        
//         }, error => {
//             alert("Error getting your location: " + error.message);
//         });
//     }
//     else {
//         alert("Geolocation is not available in your browser.");
//         }
// }
// // Check the user's location periodically (e.g., every 10 seconds)
// //setInterval(checkLocation, 1000);

// // Initial check when the page loads
// checkLocation();


// }
// function validateUserMerchant() {
// function checkCoordinates(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfMerchantORG) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }

// function handleLocationSuccess(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     document.getElementById("latitude").textContent = "Latitude: " + userLat;
//     document.getElementById("longitude").textContent = "Longitude: " +  userLon;

//     // Create Google Maps link
//     const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     document.getElementById("google-maps-link").innerHTML = `<a href="${googleMapsLink}" target="_blank">View on Google Maps</a>`;

//     const isWithinCoordinates = checkCoordinates(userLat, userLon);

//     if (isWithinCoordinates) {
//     alert("You are within Mustafa's your coordinates");
//     } else {
//     alert("You are not within the given coordinates.");
//     }
// }

// function handleLocationError(error) {
//     alert("Error getting your location: " + error.message);
// }

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     handleLocationSuccess,
//     handleLocationError
//     );
// } else {
//     alert("Geolocation is not available in your browser.");
// }
// }
// function validateUserKanaskar() {
// function checkCoordinates(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfKanaskar) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }

// function handleLocationSuccess(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     const isWithinCoordinates = checkCoordinates(userLat, userLon);

//     if (isWithinCoordinates) {
//     alert("You are within Kanaskar's coordinates");
//     } else {
//     alert("You are not within the given coordinates.");
//     }
// }

// function handleLocationError(error) {
//     alert("Error getting your location: " + error.message);
// }

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     handleLocationSuccess,
//     handleLocationError
//     );
// } else {
//     alert("Geolocation is not available in your browser.");
// }
// }
// function validateUserGosavi() {
// function checkCoordinates(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfGosavi) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }

// function handleLocationSuccess(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     const isWithinCoordinates = checkCoordinates(userLat, userLon);

//     if (isWithinCoordinates) {
//     alert("You are within Gosavi's coordinates");
//     } else {
//     alert("You are not within the given coordinates.");
//     }
// }

// function handleLocationError(error) {
//     alert("Error getting your location: " + error.message);
// }

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     handleLocationSuccess,
//     handleLocationError
//     );
// } else {
//     alert("Geolocation is not available in your browser.");
// }
// }

// //RANDOM
// function validateUserRandom() {
// function checkCoordinatesOfMerchant(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfMerchantORG) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }
// function checkCoordinatesOfKanaskar(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfKanaskar) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }
// function checkCoordinatesOfGosavi(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfGosavi) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }
// function checkCoordinatesOfCollege(userLat, userLon) {
//     for (const coord of constraintCoordinatesOfCollege) {
//     const latDiff = Math.abs(coord.lat - userLat);
//     const lonDiff = Math.abs(coord.lon - userLon);

//     // Define a threshold value for considering coordinates as close
        

//     if (latDiff < threshold && lonDiff < threshold) {
//         return true;
//     }
//     }
//     return false;
// }

// function handleLocationSuccess(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     const isWithinCoordinatesOfMerchant = checkCoordinatesOfMerchant(
//     userLat,
//     userLon
//     );
//     const isWithinCoordinatesOfKanaskar = checkCoordinatesOfKanaskar(
//     userLat,
//     userLon
//     );
//     const isWithinCoordinatesOfGosavi = checkCoordinatesOfGosavi(
//     userLat,
//     userLon
//     );
//     const isWithinCoordinatesOfCollege = checkCoordinatesOfCollege(
//     userLat,
//     userLon
//     );

//     if (isWithinCoordinatesOfMerchant == true) {
//     alert("You are within Merchant's coordinates");
//     } else if (isWithinCoordinatesOfKanaskar == true) {
//     alert("You are within Kanaskar's coordinates");
//     } else if (isWithinCoordinatesOfGosavi == true) {
//     alert("You are within Gosavi's coordinates");
//     } else if (isWithinCoordinatesOfCollege == true) {
//     alert("You are within GGSP's coordinates");
//     } else {
//     alert("No coordinates matched!");
//     }
// }

// function handleLocationError(error) {
//     alert("Error getting your location: " + error.message);
// }

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     handleLocationSuccess,
//     handleLocationError
//     );
// } else {
//     alert("Geolocation is not available in your browser.");
// }
// }

// function handleLocationSuccess(position) {
//     const userLat = position.coords.latitude;
//     const userLon = position.coords.longitude;

//     document.getElementById("latitude").textContent = "Latitude: " + userLat;
//     document.getElementById("longitude").textContent = "Longitude: " +  userLon;

//     // Create Google Maps link
//     const googleMapsLink = `https://www.google.com/maps?q=${userLat},${userLon}`;
//     document.getElementById("google-maps-link").innerHTML = `<a href="${googleMapsLink}" target="_blank">View on Google Maps</a>`;

//     (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
//         key: "AIzaSyCNAwtqMaWIndTJRMLRC7Yw0GTWRSyy0h4",
//         v: "weekly",
//         // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//         // Add other bootstrap parameters as needed, using camel case.
//     });

//     // Initialize and add the map
//     let map;
//     async function initMap() {
//         // The location of User
//         const position = { lat: userLat, lng: userLon };
//         // Request needed libraries.
//         //@ts-ignore
//         const { Map } = await google.maps.importLibrary("maps");
//         const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//         // The map, centered at User's Location
//         map = new Map(document.getElementById("map"), {
//         zoom: 40,
//         center:position,
//         mapId: "Location",
//         disableDefaultUI: true,
//         });

//         // The marker, positioned at user's current location
//         var marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Your Current Location",
//         });
//         if (userMarker !== null) {
//         userMarker.setLatLng([userLat,userLon]);
//         }
//         //map.clearOverlays();
//         //map.addOverlay(AdvancedMarkerElement);
//     }

//     initMap();
// }

// function handleLocationError(error) {
// alert("Error getting your location: " + error.message);
// }

// if ("geolocation" in navigator) {
// navigator.geolocation.getCurrentPosition(
//     handleLocationSuccess,
//     handleLocationError
// );
// } else {
// alert("Geolocation is not available in your browser.");
// }
// function updateLocation() {
//     const options = {
//         enableHighAccuracy: true,
//         timeout: 10000, // Maximum time to wait for location (in milliseconds)
//         maximumAge: 0   // Maximum age of cached location (in milliseconds)
//     };
//     if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//         handleLocationSuccess,
//         handleLocationError,
//         options
//     );
// } else {
//     alert("Geolocation is not available in your browser.");
// }
// } 

// Update location every 1 second
//setInterval(function(){
//  updateLocation()
//  console.log("Refreshing...")
//},1000)

//(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    //key: "AIzaSyCNAwtqMaWIndTJRMLRC7Yw0GTWRSyy0h4",
    //v: "weekly",
    //// Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    //// Add other bootstrap parameters as needed, using camel case.
//});
//// Initialize and add the map
//let map;
//
//async function initMap() {
    //// The location of User's Location
    //const position = { lat: -25.344, lng: 131.031 };
    //// Request needed libraries.
    ////@ts-ignore
    //const { Map } = await google.maps.importLibrary("maps");
    //const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//
    //// The map, centered at User's Location
    //map = new Map(document.getElementById("map"), {
    //zoom: 4,
    //center: position,
    //mapId: "DEMO_MAP_ID",
    //});
//
    //// The marker, positioned at User's Location
    //const marker = new AdvancedMarkerElement({
    //map: map,
    //position: position,
    //title: "User's Location",
    //});
//}
//
//initMap();