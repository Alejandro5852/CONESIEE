-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ieeedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ieeedb
-- -----------------------------------------------------
DROP DATABASE ieeedb;

CREATE SCHEMA IF NOT EXISTS `ieeedb` DEFAULT CHARACTER SET latin1 ;
USE `ieeedb` ;

-- -----------------------------------------------------
-- Table `ieeedb`.`participante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ieeedb`.`participante` (
  `participante_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `identificacion` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `carrera` VARCHAR(100) NULL,
  `facultad` VARCHAR(100) NULL,
  `universidad` VARCHAR(100) NULL,
   PRIMARY KEY (`participante_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ieeedb`.`frente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ieeedb`.`conferencia` (
  `conferencia_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tema` VARCHAR(250) NOT NULL,
  `expositor` VARCHAR(150) NOT NULL,
  `inicio` DATETIME NOT NULL DEFAULT NOW(),
  `fin` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`conferencia_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ieeedb`.`action_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ieeedb`.`asignacion` (
  `asignacion_id` INT NOT NULL AUTO_INCREMENT,
  `id_participante` int NOT NULL,
  `id_conferencia` int NOT NULL,
  `fecha` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`asignacion_id`),
  INDEX `fk_variable_participante_idx` (`id_participante` ASC),
  INDEX `fk_variable_conferencia_idx` (`id_conferencia` ASC),
 CONSTRAINT `fk_variable_participante`
    FOREIGN KEY (`id_participante`)
    REFERENCES `ieeedb`.`participante` (`participante_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_variable_conferencia`
    FOREIGN KEY (`id_conferencia`)
    REFERENCES `ieeedb`.`conferencia` (`conferencia_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  )
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ieeedb`.`asistencia` (
  `asistencia_id` INT NOT NULL AUTO_INCREMENT,
  `asignacion` int NOT NULL,
  `nota` int NOT NULL,
  `fecha` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`asistencia_id`),
  INDEX `fk_variable_asignacion_idx` (`asignacion` ASC),
  CONSTRAINT `fk_variable_asistencia`
    FOREIGN KEY (`asignacion`)
    REFERENCES `ieeedb`.`asignacion` (`asignacion_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  )
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



