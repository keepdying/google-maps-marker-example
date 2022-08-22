/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const myLatLng = { lat: -25.363, lng: 131.044 };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: myLatLng,
    }
  );
  const markerArray: Array<google.maps.Marker> = [];
  let data = {lat: null, lng: null}
  map.addListener('click',function(e) {
    data.lat = e.latLng.lat();
    data.lng = e.latLng.lng();
    markerArray.push(
      new google.maps.Marker({
        position: data,
        map
      })
    ); 
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
