"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 4.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

from pathlib import Path
from dotenv import load_dotenv  #add .env

# 세션 관련 설정
# 세션 엔진 설정 (기본적으로 데이터베이스를 사용)
SESSION_ENGINE = 'django.contrib.sessions.backends.db'

# 세션 쿠키의 암호화에 사용되는 비밀 키
SECRET_KEY = 'your_secret_key'

# 세션 쿠키의 만료 시간 (예: 2주)
SESSION_COOKIE_AGE = 60 * 60 * 24 * 14

# HTTPS 연결을 통해만 세션 쿠키를 전송
#SESSION_COOKIE_SECURE = True

# JavaScript에서 접근하지 못하도록 세션 쿠키에 HttpOnly 속성 추가
SESSION_COOKIE_HTTPONLY = True


# add DIR env
BASE_DIR = Path(__file__).resolve().parent.parent
PROJECT_DIR = Path(BASE_DIR).stem  #also can use Path(~).name

load_dotenv(Path(BASE_DIR) / '.env')  #add to 

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-y@kjSECRET_KEY(l%j3k=6j7xwh-+jt1r09@(9=$42^$a+v*d$p)4%*f)yh'


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    #'your_domain.com',  #edit after get domain name 
    'localhost', 
    '127.0.0.1']



# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 3rd party
    'rest_framework',
    'corsheaders',

    # local
    'Groomusers.apps.GroomusersConfig',
    'Projectinfo.apps.ProjectinfoConfig',
    'Appinfo.apps.AppinfoConfig',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', #add to
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware', # 세션관리 역할
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [(Path(BASE_DIR) / 'templates')], #change to
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

# delete to
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'Groomusers.Groomusers'


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'ko-kr' #'en-us', change to

TIME_ZONE = 'Asia/Seoul' #'UTC', change to

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'

#Where to refer to static files in the development environment
STATICFILES_DIRS = [(Path(BASE_DIR) / 'static')] #add to

#Where to reference static files in production
STATIC_ROOT = (Path(BASE_DIR) / 'staticfiles') #add to

#Media file path
MEDIA_URL = 'media/' #add to

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Rest Framework & CORS
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
        #'rest_framework.permissions.IsAuthenticated',  #인증된 사용자만 접근 가능
    ]
}

CORS_ORIGIN_ALLOW_ALL = False

CORS_ORIGIN_WHITELIST = (

    'http://192.168.45.134',

    'http://gosu.digital',
    'http://gosu.digital:8080',

    'http://192.168.45.134:3000',
    'http://192.168.45.134:8080',

    #'https://your_domain.com',  #edit after get domain name
    # add more if needed
)

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:3000',

    'http://gosu.digital:8080',

    'http://192.168.45.134:8080',
]

#CORS_ORIGIN_ALLOW_ALL = True  #<- 수정필요  
#CSRF_TRUSTED_ORIGINS = ['http://localhost:8080']
#아래 또한 수정 필요
#CORS_ORIGIN_WHITELIST = (
#    'http://localhost', 'http://localhost:3000'
#)


CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
]
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]