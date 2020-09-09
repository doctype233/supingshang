
const { origin } = window.location;

const baseUrl =
  origin.indexOf('localhost') > -1
    ? 'https://dwapi.nyush.einsh.com/'
    : origin;
//10.209.192.146 nyu.dw.local
const URL = {
  term:(career,gender)=>(`/api/report/graduateSheet1?StudentCareer=${career}&Gender=${gender}`),
  maj:(career,gender)=>(`/api/report/graduateSheet2?StudentCareer=${career}&Gender=${gender}`),
  npm:(career,gender)=>(`/api/report/graduateSheet3?StudentCareer=${career}&Gender=${gender}`),
  discontinued:(career,gender)=>(`/api/report/discontinue?StudentCareer=${career}&Gender=${gender}`),
  admission:(career,gender)=>(`/api/report/matriculationSheet1?StudentCareer=${career}&Gender=${gender}`),
  source:(career,gender)=>(`/api/report/matriculationSheet2?StudentCareer=${career}&Gender=${gender}`),
  ethnic:(career,gender)=>(`/api/report/matriculationSheet3?StudentCareer=${career}&Gender=${gender}`),
  enrollment:'/api/report/studentEnrollment',
  faculty:"/api/report/facultyAndStaff",
  facultyTimeTypes:(gender)=>(`/api/report/facultyTimeTypes?Gender=${gender}`),
  facultyType:(gender)=>(`/api/report/facultyType?Gender=${gender}`),
  metrics:"/api/report/getMap",
  getInBound:"/api/report/getInBound",
  getOutBound:"/api/report/getOutBound",
  roseMap:"/api/report/roseMap",
  facultyRoseMap:"/api/report/facultyRoseMap",
  dataCollect:"/api/report/dataCollect"
};

export { baseUrl, URL };
