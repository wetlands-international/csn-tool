import { ENDPOINT_SQL } from 'constants/map';

const L = window.L;

export const TopoJSON = L && L.GeoJSON.extend({
  addData(jsonData) {
    if (jsonData.type === 'Topology') {
      Object.keys(jsonData.objects).forEach((key) => {
        const geojson = topojson.feature(jsonData, jsonData.objects[key]);
        L.GeoJSON.prototype.addData.call(this, geojson);
      });
    } else {
      L.GeoJSON.prototype.addData.call(this, jsonData);
    }
  }
});

export function getSqlQuery(query) {
  const singleLineQuery = query.replace(/\r?\n|\r/g, ' ');
  return fetch(ENDPOINT_SQL + singleLineQuery).then(res => res.json());
}
