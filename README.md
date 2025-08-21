## Django Login and Registration System
## This is a simple Django application that implements user authentication with login, registration, and admin panel features.

<img width="1536" height="1024" alt="ChatGPT Image 20 июл  2025 г , 21_48_10" src="https://github.com/user-attachments/assets/d8c3be83-ba7c-4e30-b37b-ad0d09fa698c" />


### 1. Clone the Repository
First, clone the repository from GitHub:
```sh
git clone https://github.com/SergKhachikyan/Django_Login_Register.git
```

### 2. Create and Activate a Virtual Environment
Create a virtual environment:
```sh
python.exe -m venv venv
```

Activate the virtual environment:
- **Windows**:
  ```sh
  venv\Scripts\activate
  ```
- **Mac/Linux**:
  ```sh
  source venv/bin/activate
  ```

### 3. Upgrade pip
Upgrade pip to the latest version:
```sh 
py -m pip install --upgrade pip
```

### 4. Install Dependencies
Install the required dependencies from requirements.txt:
```sh
pip install -r requirements.txt
```

### 5. Navigate to the Core Folder
Navigate to the core directory where the main application is located:
```sh 
cd core
```
### 6. Run Migrations
Apply the migrations to set up the database:
```sh
python manage.py makemigrations
python manage.py migrate
```

### 7. Create a Superuser
Create a superuser to access the Django admin panel:
```sh
python manage.py createsuperuser
```
Follow the prompts to create a username, email, and password.

### 8. Run the Server
Finally, start the Django development server:
``` sh
python manage.py runserver
```

Your Django application will now be accessible at:
```sh
http://127.0.0.1:8000/
```
