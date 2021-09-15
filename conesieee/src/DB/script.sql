CREATE TABLE Participante(
    participante_id int NOT NULL AUTO_INCREMENT, 
    nombres char(100) NOT NULL, 
    apellidos char(100) NOT NULL,
    identificacion char(100) NOT NULL,
    correo char(100) NOT NULL,
    carrera char(100) NULL,
    facultad char(100) NOT NULL,
    universidad char(100) NOT NULL,
    PRIMARY KEY(participante_id)
);

CREATE TABLE Conferencia(
    conferencia_id int NOT NULL AUTO_INCREMENT,
    tema char(250) NOT NULL,
    expositor char(150) NOT NULL,
    inicio datetime  NOT NULL,
    fin datetime  NOT NULL,
    PRIMARY KEY(conferencia_id)
);

CREATE TABLE Asignacion(
    asignacion_id int NOT NULL AUTO_INCREMENT,
    participante int NOT NULL,
    conferencia int NOT NULL, 
    fecha datetime  NOT NULL,
    PRIMARY KEY(asignacion_id),
    FOREIGN KEY (participante) REFERENCES Participante (participante_id),
    FOREIGN KEY (conferencia) REFERENCES Conferencia (conferencia_id) 
);

CREATE TABLE Asistencia(
    asistencia_id int NOT NULL AUTO_INCREMENT,
    asignacion int NOT NULL,
    nota int NOT NULL, 
    fecha datetime  NOT NULL,
    PRIMARY KEY(asistencia_id),
    FOREIGN KEY (asignacion) REFERENCES Asignacion (asignacion_id),
);



