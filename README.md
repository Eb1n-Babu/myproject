myproject/                  # Root folder
├── backend/                # Django backend
│   ├── manage.py
│   ├── backend/            # Django project folder
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── todos/              # Django app for todos
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py  # For DRF
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── migrations/     # Database migrations
│   ├── db.sqlite3          # SQLite database (default)
│   └── requirements.txt    # Python dependencies
├── frontend/               # React frontend
│   ├── public/             # Static files
│   │   ├── index.html
│   │   └── ...
│   ├── src/                # React source code
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/     # Custom components, e.g., TodoList.js
│   │   └── ...
│   ├── package.json        # npm dependencies
│   ├── package-lock.json
│   └── .env                # Environment variables (e.g., API URL)
├── .gitignore              # Git ignore file
└── README.md               # Project documentation