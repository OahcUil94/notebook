import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

// 可以注册那些在 Universal 环境下运行应用时特有的服务提供商
@NgModule({
  imports: [
    AppModule, // 客户端应用的AppModule
    ServerModule,  // 服务端的Angular模块
    ModuleMapLoaderModule, // 用于实现服务端的路由的惰性加载
    ServerTransferStateModule // 在服务端导入, 用于实现将状态从服务器传输到客户端
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
