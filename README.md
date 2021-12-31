# weather-API-automation-js

This API automation project will automate the weather API in [https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/](https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/) and will automate below APIs:

- GET /current?lat={lat}&lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242 (current weather data)
- GET /forecast/3hourly?postal_code={postal_code} for values {postal_code} as 28546 (hourly historical weather data)



## Introduction

API (Application Programming Interface) is a computing interface or a "bridge" which enables communication and data exchange between two separate software systems. API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.



## Libraries

- Node.js 16.13.1
- npm 8.1.2
- Supertest 6.1.6
- Mocha 9.1.3
- Babel 7.16



## Configuration and How To Run

1. Download the text editor or IDE, in this case I use VS Code. You can use any type of IDE such as Sublime Text, Atom, Eclipse, etc.

2. Download Node.js (include npm) from https://nodejs.org/en/download/

3. Create new folder in your computer

4. Open up the terminal or command prompt and locate to your new folder, create a new npm package to create a package.json file

   `npm init`

5. Install all used libraries 

   `npm install --save-dev supertest mocha @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`

6. Download or git clone this repository and locate to your folder.

7. Open the project in text editor or IDE, the project structure would be like this

   ![image](https://user-images.githubusercontent.com/60541261/147799012-a168d682-8987-452a-8933-72973f963628.png)


8. Get your API key by registering at https://www.weatherbit.io/account/create

9. To run the project, open the terminal and type `npm test`



## References

- https://en.wikipedia.org/wiki/API_testing
- https://www.guru99.com/api-testing.html#3
