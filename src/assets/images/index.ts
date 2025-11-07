import personalCertificate from "./achievements/personal-certificate.png";
import teamCertificate from "./achievements/team-certificate.png";
import db from "./companies/db.png";
import pagbrasil from "./companies/pagbrasil.png";
import rehagro from "./companies/rehagro.png";
import about from "./profile/about.png";
import avatar from "./profile/avatar.png";
import blazeClone from "./projects/blaze-clone.png";
import cartaoIsento from "./projects/cartao-isento.png";
import ecoDescarte from "./projects/eco-descarte.png";
import floodRisk from "./projects/flood-risk.png";
import geradorAleatorioDeEntretenimento from "./projects/gerador-aleatorio-de-entretenimento.png";
import glossarioLibras from "./projects/glossario-libras.png";
import linkedinClone from "./projects/linkedin-clone.png";
import medicenter from "./projects/medicenter.png";
import metamorfoseDigital from "./projects/metamorfose-digital.png";
import optimustech from "./projects/optimustech.png";
import petmatch from "./projects/petmatch.png";
import popularMovies from "./projects/popular-movies.png";
import portfolio from "./projects/portfolio.png";
import taskList from "./projects/task-list.png";
import urnaEletronica from "./projects/urna-eletronica.png";

export const images = {
  about,
  avatar,
  blazeClone,
  cartaoIsento,
  db,
  floodRisk,
  geradorAleatorioDeEntretenimento,
  glossarioLibras,
  linkedinClone,
  medicenter,
  optimustech,
  pagbrasil,
  personalCertificate,
  petmatch,
  popularMovies,
  portfolio,
  rehagro,
  taskList,
  teamCertificate,
  urnaEletronica,
};

export const thumbnails = {
  "blaze-clone": blazeClone,
  "cartao-isento": cartaoIsento,
  "eco-descarte": ecoDescarte,
  "flood-risk": floodRisk,
  "gerador-aleatorio-de-entretenimento": geradorAleatorioDeEntretenimento,
  "glossario-libras": glossarioLibras,
  "linkedin-clone": linkedinClone,
  "metamorfose-digital": metamorfoseDigital,
  "popular-movies": popularMovies,
  "task-list": taskList,
  "urna-eletronica": urnaEletronica,
  medicenter,
  optimustech,
  petmatch,
  portfolio,
};

export type ProjectName = keyof typeof thumbnails;
