# Soft-BD-LTD-Hire-Train-Program

Php Laravel new Project Set up:

Download and Install
- Laragon               : https://getcomposer.org/Composer-Setup.exe
- Composer              : https://github.com/leokhoa/laragon/releases/download/6.0.0/laragon-wamp.exe
- Node JS for frontend  : https://nodejs.org/dist/v22.4.0/node-v22.4.0-x64.msi

## After Installing Laragon 
1. Start the Server -> Menu -> tool ->Quick Add ->*phpmyadmin
2. Start the Server -> Database -> phpMyAdmin

<table>
    <tr>
        <td> <img src="./img/laragon_start_1.png" alt="Laragon1" /> </td>
        <td> <img src="./img/laragon_start_2.png" alt="Laragon2" /> </td>
    </tr>
    <tr>
        <td> <img src="./img/laragon_start_3.png" alt="Laragon1" /> </td>
        <td> <img src="./img/laragon_start_4.png" alt="Laragon2" /> </td>
    </tr>
    <tr>
        <td> <img src="./img/phpmyadmin_log_in.png" alt="Laragon1" /> </td>
    </tr>

</table>



## Go to the folder on which you want to create a new project

1. Open CMD in the folder
2. Write the command to create a new project

```bash
composer create-project laravel/laravel myapp1
```

**myapp1 will be created**

Now open the directory of the project and run the project

```bash
cd myapp1
php artisan serve
```
It win run on local host.

Laravel File structure:
1. Model Folder
2. Controller Folder
3. View Folder
4. Routing Folder
5. Assests Folder

Model Folder:
Database/SQL Queries Handling Files
Locate: app -> Http -> Model


Controller Folder:
Logics, Calls Model and View Elements
Locate: app -> Http -> Controller

View Folder:
HTML files
Locate: resources -> views -> all html related files

Routing Folder:
URL Defining Files
Locate: routes -> web.route(routes for all the pages in the website)
               -> api.route(routes for all the api)

Assests Folder (Public Folder):
Images, Videos, Music, Video Files
CSS, JS
Locate: public (index file)


*** There are more folders in Laravel

Resources Folder:
CSS, JS (Which we dont wanna expose to the users)

Config Folder: 
All the configuration file

Storage Folder:
hold all the log files which are used for caching

Test Folder:
unit test files

Vendor Folder:
all the packages installed (library, gateway) with the help of composer





