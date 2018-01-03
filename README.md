<!-- # ngx-finviet
ngx-finviet
 -->
 # Ngx-finviet

 This is a plugin of FinViet, editor by FinViet.

 ## Getting Started

 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

 ### Installing

 A step by step series of examples that tell you have to get a development env running

 Say what the step will be

 To install this library, run:

 ```
 $ npm install ngx-finviet --save

 ```

 End with an example of getting some data out of the system or using it for a little demo

 ## Consuming your library

 Once you have published your library to npm, you can import your library in any Angular application by running:

 ```
 $ npm install ngx-finviet
 ```
 and then from your Angular AppModule:

 ```
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
  
 import { AppComponent } from './app.component';
  
 // Import your library
 import { SampleModule } from 'ngx-finviet';
  
 @NgModule({
   declarations: [
     AppComponent
   ],
   imports: [
     BrowserModule,
  
     // Specify your library as an import
     LibraryModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }

 ```
 Once your library is imported, you can use its components, directives and pipes in your Angular application:

 ```
 <!-- You can now use your library component in app.component.html -->
 <h1>
   {{title}}
 </h1>
 <sampleComponent></sampleComponent>
 ```
 ## Congrats!

 You are awesome! :ok_hand:

 ## License

 MIT ©`finviet`

 This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details