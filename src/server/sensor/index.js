// @flow
import  BME280 from "i2c-bme280";
const bme280 = new BME280({address: 0x76});

type Sensor = {
  time: Date,
  temperature: number,
  humidity: number,
  pressure: number
};
export async function loadSensor(): Promise<Sensor> {
  return new Promise((resolve, reject) => {
    // 手元環境用
    if(process.env.NODE_ENV === "development"){
      resolve({
        time: new Date(),
        temperature: 20,
        humidity: 75,
        pressure: 1013
      });
    }
    bme280.begin((err) => {
      if(err){
        reject(err);
      } else {
        bme280.readPressureAndTemparature((err, pressure, temperature, humidity) => {
          if(err){
            reject(err);
          } else {
            resolve({
              time: new Date(),
              temperature: temperature,
              humidity: humidity,
              pressure: pressure
            });
          }
        });
      }
    });
  });
}

