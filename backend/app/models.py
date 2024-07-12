from app import db
from sqlalchemy import Enum


class classe(db.Model):
    idclasse = db.Column(db.Integer, primary_key=True)
    class_nom = db.Column(db.String(128), nullable=False)

    def to_dict(self):
        return {
            'idclass' : self.idclass,
            'class_nom' : self.class_nom
        }

    def __repr__(self):
        return f'<classe {self.name}>'


class person(db.Model):
    idPerson = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(128), nullable=False)
    prenom = db.Column(db.String(128), nullable=False)
    email =db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    type = db.Column(Enum('Admin', 'professeur', 'student',name="type"),nullable=False, default='student')

    def to_dict(self):
        return {
            'idPerson' : self.idPerson,
            'nom' : self.nom,
            'prenom' : self.prenom,
            'email' : self.email,
            'password' : self.password,
            'type':self.type
        }

    def __repr__(self):
        return f'<person {self.name}>'




class prof(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idprof = db.Column(db.Integer, db.ForeignKey('person.idPerson'))
    matier = db.Column(db.String(256))

    def to_dict(self):
        return {
            'id':self.id,
            'idprof' : self.idprof,
            'matier' : self.matier
        }

    def __repr__(self):
        return f'<prof {self.name}>'




class Cours(db.Model):
    __tablename__ = 'cours'
    
    idcours = db.Column(db.Integer, primary_key=True)
    nom_cours = db.Column(db.String(45), nullable=False)
    idprof = db.Column(db.Integer, db.ForeignKey('prof.idprof'), nullable=False)
    idclass = db.Column(db.Integer, db.ForeignKey('classe.idclasse'), nullable=False)
    contenu = db.Column(db.String(45), nullable=False)
    date_creation = db.Column(db.Date, nullable=False)
    titre = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(45), nullable=False)
    statu = db.Column(Enum('brouillon', 'publie', 'archive', name="statu"), nullable=False)
    nomcours = db.Column(db.String(45), nullable=False)
    courscol = db.Column(db.String(45), nullable=False)

    def to_dict(self):
        return {
            'idcours': self.idcours,
            'nom_cours': self.nom_cours,
            'idprof': self.idprof,
            'idclass': self.idclass,
            'contenu': self.contenu,
            'date_creation': self.date_creation,
            'titre': self.titre,
            'description': self.description,
            'statu': self.statu,
            'nomcours': self.nomcours,
            'courscol': self.courscol
        }

    def __repr__(self):
        return f'<Cours {self.nom_cours}>'



class student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_student = db.Column(db.Integer, db.ForeignKey('person.idPerson'))
    id_class = db.Column(db.Integer, db.ForeignKey('classe.idclasse'))

    def to_dict(self):
        return {
            'id':self.id,
            'id_student': self.id_student,
            'idclass': self.id_class
        }

    def __repr__(self):
        return f'<student {self.name}>'
