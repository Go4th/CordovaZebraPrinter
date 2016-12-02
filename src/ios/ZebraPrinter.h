#import <Cordova/CDVPlugin.h>

@interface ZebraPrinter : CDVPlugin

- (void)sendZplOverBluetooth:(CDVInvokedUrlCommand*)command;

- (void)sendCPclOverBluetooth:(CDVInvokedUrlCommand*)command;

- (void)sampleWithGCD:(CDVInvokedUrlCommand*)command;

@end
