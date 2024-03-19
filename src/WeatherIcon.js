import Cloudy from './icons/cloudy.png';
import DayClear from './icons/day-clear.png';
import DayPartiallyCloudy from './icons/day-partially-cloudy.png';
import Foggy from './icons/foggy.png';
import HeavyRain from './icons/heavy-rain.png';
import HeavySnow from './icons/heavy-snow.png';
import LightSnow from './icons/light-snow.png';
import LightRain from './icons/light-rain.png';
import NightClear from './icons/night-clear.png';
import NightPartiallyCloudy from './icons/night-partially-cloudy.png';
import Sleet from './icons/sleet.png';
import Thunder from './icons/thunder.png';

export default class WeatherIcons {
  static icons = {
    1000: DayClear,
    1003: DayPartiallyCloudy,
    1006: Cloudy,
    1009: Cloudy,
    1069: Sleet,
    1204: Sleet,
    1207: Sleet,
    1237: Sleet,
    1249: Sleet,
    1252: Sleet,
    1261: Sleet,
    1264: Sleet,
    1171: HeavyRain,
    1186: HeavyRain,
    1189: HeavyRain,
    1192: HeavyRain,
    1195: HeavyRain,
    1201: HeavyRain,
    1243: HeavyRain,
    1246: HeavyRain,
    1114: HeavySnow,
    1117: HeavySnow,
    1219: HeavySnow,
    1222: HeavySnow,
    1225: HeavySnow,
    1258: HeavySnow,
    1030: Foggy,
    1135: Foggy,
    1147: Foggy,
    1063: LightRain,
    1069: LightRain,
    1072: LightRain,
    1150: LightRain,
    1153: LightRain,
    1168: LightRain,
    1180: LightRain,
    1183: LightRain,
    1198: LightRain,
    1240: LightRain,
    1066: LightSnow,
    1210: LightSnow,
    1213: LightSnow,
    1216: LightSnow,
    1255: LightSnow,
    1087: Thunder,
    1273: Thunder,
    1276: Thunder,
    1279: Thunder,
    1282: Thunder,
  };

  static getIcon(code) {
    const weatherIcon = new Image();
    const iconUrl = this.icons[code];
    if (iconUrl) {
      weatherIcon.src = iconUrl;
    }
    return weatherIcon;
  }
}
