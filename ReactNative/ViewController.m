//
//  ViewController.m
//  RNTest
//
//  Created by chenzhen on 16/7/4.
//  Copyright © 2016年 站在巨人肩膀. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

#import "CodePush.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self initRNView];
}
-(void)initRNView {
 
    NSURL *jsCodeLocation;
//    jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.121:8081/index.ios.bundle?platform=ios&dev=true"];
//    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    jsCodeLocation = [CodePush bundleURL];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"ReactNative"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    rootView.frame = self.view.bounds;
    [self.view addSubview:rootView];
    
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
