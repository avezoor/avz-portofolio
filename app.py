from flask import Flask, render_template
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_key")

# Sample data with more realistic content
PROFILE = {
    "name": "Izzar Suly Nashrudin",
    "title": "Mathematician",
    "description": "I am a Web Developer interested in modern technologies for building efficient and secure web applications. I also enjoy mathematics, especially in data analysis and problem-solving. Additionally, I keep up with the world of crypto, including blockchain and decentralized technologies. I was born on November 18, 2004, in Jombang, East Java, Indonesia.",
    "badges": ["Web Developer", "Mathematics", "Crypto"],
    "social": {
        "github": "https://github.com/avezoor",
        "linkedin": "https://linkedin.com/in/izzar-suly-nashrudin",
        "whatsapp": "https://wa.me/6285173187323",
        "instagram": "https://www.instagram.com/ave.zoor"
    }
}

INVESTMENTS = {
    "total_assets": None,
    "allocation": {
        "investments": None,
        "savings": None,
        "needs": None
    },
    "breakdown": {
        "saving": 22000,
        "gold": 46076,
        "crypto": 17500
    }
}

EXPERIENCE = [
    {
        "company": "HMPS Integral Matematika 2024",
        "position": "Publishing and Journalistic",
        "period": "Jun 2024 - Dec 2024",
        "description": ""
    }
]

EDUCATION = [
    {
        "degree": "Bachelor of Mathematics",
        "institution": "Universitas Islam Negeri Maulana Malik Ibrahim Malang",
        "year": "2023 - Present"
    },
    {
        "degree": "Science and Mathematics",
        "institution": "Madrasah Aliyah Negeri 7 Jombang",
        "year": "2020 - 2023"
    },
    {
        "degree": "Middle School",
        "institution": "Madrasah Tsanawiyah Negeri 5 Jombang",
        "year": "2019 - 2020"
    },
    {
        "degree": "Middle School",
        "institution": "Madrasah Tsanawiyah Negeri 3 Jombang",
        "year": "2017 - 2019"
    },
    {
        "degree": "Elementary School",
        "institution": "Sekolah Dasar Negeri Ketapang Kuning",
        "year": "2011 - 2017"
    }
]

CERTIFICATIONS = [
    {
        "name": "Coming Soon",
        "issuer": "Coming Soon",
        "date": "Coming Soon",
        "number": "Coming Soon"
    }
]

PROJECTS = [
    {
        "name": "Coming Soon",
        "description": "Coming Soon",
        "status": "Coming Soon"
    }
]

SKILLS = [
    {"name": "Python", "level": 50},
    {"name": "Node JS", "level": 50},
    {"name": "R", "level": 30},
    {"name": "Github", "level": 30},
    {"name": "HTML + CSS", "level": 60},
    {"name": "JavaScript", "level": 30},
    {"name": "Digital Design", "level": 85}
]

QUOTE = {
    "text": "From Zero To Hero.",
    "author": "Avezoor"
}

@app.route('/')
def index():
    return render_template('index.html',
                         profile=PROFILE,
                         investments=INVESTMENTS,
                         experience=EXPERIENCE,
                         education=EDUCATION,
                         certifications=CERTIFICATIONS,
                         projects=PROJECTS,
                         skills=SKILLS,
                         quote=QUOTE)