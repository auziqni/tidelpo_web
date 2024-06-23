type MyLocation = {
  lat: number;
  lng: number;
};

interface DataMap {
  id: number;
  deviceCode: string;
  nama: string;
  lat: number;
  lng: number;
  sensSoil: number;
  sensPressure: number;
  sensTilt: number;
  statusTiang: string;
  timeStamp: string;
}
