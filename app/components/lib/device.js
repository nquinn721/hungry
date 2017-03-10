import DeviceInfo from 'react-native-device-info';


export default class Device{
    uniqueID = DeviceInfo.getUniqueID();
    manufacturer = DeviceInfo.getManufacturer();
    brand = DeviceInfo.getBrand();
    model = DeviceInfo.getModel();
    deviceId = DeviceInfo.getDeviceId();
    systemName = DeviceInfo.getSystemName();
    systemVersion = DeviceInfo.getSystemVersion();
    bundleId = DeviceInfo.getBundleId();
    buildNumber = DeviceInfo.getBuildNumber();
    version = DeviceInfo.getVersion();
    readableVersion = DeviceInfo.getReadableVersion();
    deviceName = DeviceInfo.getDeviceName();
    userAgent = DeviceInfo.getUserAgent();
    deviceLocale = DeviceInfo.getDeviceLocale();
    deviceCountry = DeviceInfo.getDeviceCountry();
    timezone = DeviceInfo.getTimezone();
    instanceID = DeviceInfo.getInstanceID();
    isEmulator = DeviceInfo.isEmulator();
    isTablet = DeviceInfo.isTablet();
}
