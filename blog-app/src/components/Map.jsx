function Map() {
  return (
    <>
      <iframe
        width="520"
        height="400"
        scrolling="no"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Thessaloniki+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=9f45a47cec3e62ebcd6800d2d57d3b68135c7f22"
      ></script>
    </>
  )
}

export default Map
