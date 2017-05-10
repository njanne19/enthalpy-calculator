var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:compound', function(req, res, next) {
  var compound = req.params.compound;
  var returnData = data[compound];

  if (isNaN(compound[0])==false) {
    returnData = data[compound.substring(1)]
    returnData *= Number(compound[0]);
  }

  res.json({"compound": compound, enthalpy: returnData});
});

module.exports = router;


//http://bilbo.chm.uri.edu/CHM112/tables/thermtable.htm


var data =
  {
    "e-(g)": 0,
    "Al(s)": 0,
    "Al3+(aq)": -531,
    "AlCl3(s)": -705.6,
    "Al2Cl6(g)": -1291,
    "AlF3(s)": -1504,
    "Al2O3(s)": -1676,
    "Al(OH)3(s)": -1276,
    "Al2(SO4)3(s)": -3441,
    "Ba(s)": 0,
    "Ba2+(aq)": -537.6,
    "Ba2+(g)": 1649.9,
    "Ba(g)": 175.6,
    "Ba+(g)": 684.6,
    "BaCO3(s)": -1216,
    "BaCl2(s)": -858.1,
    "BaF2(s)": -1209,
    "BaO(s)": -548.1,
    "Ba(OH)2(s)": -946,
    "Ba(OH)2x8H2O(s)": -3342,
    "BaSO4(s)": -1473,
    "Be(s)": 0,
    "BeCl2(s)": -496.2,
    "BeF2(s)": -1027,
    "BeO(s)": -608.4,
    "Bi(s)": 0,
    "BiCl3(s)": -379,
    "Bi2O3(s)": -573.9,
    "B(s)": 0,
    "BCl3(l)": -427.2,
    "BF3(g)": -1137,
    "B2H6(g)": 36,
    "B2O3(s)": -1272,
    "Br(g)": 111.9,
    "Br-(aq)": -120.9,
    "Br-(g)": -218.9,
    "Br2(g)": 30.91,
    "Br2(l)": 0,
    "BrCl(g)": 14.6,
    "BrF3(g)": -255.6,
    "BrF3(l)": -300.8,
    "HBr(g)": -36.4,
    "Cd(s)": 0,
    "Cd(g)": 112.8,
    "Cd2+(aq)": -75.9,
    "CdCl2(s)": -391.5,
    "CdO(s)": -258,
    "CdS(s)": -144,
    "Ca(s)": 0,
    "Ca(g)": 192.6,
    "Ca2+(aq)": -542.96,
    "Ca2+(g)": 1934.1,
    "Ca+(g)": 788.6,
    "CaBr2(s)": -682.8,
    "CaCO3(s)": -1207,
    "CaCl2(s)": -795.8,
    "CaF2(s)": -1220,
    "CaH2(s)": -186,
    "Ca(NO3)2(s)": -938.4,
    "CaO(s)": -635.1,
    "Ca(OH)2(s)": -986.1,
    "CaOH+(aq)": "",
    "Ca3(PO4)2(s)": -4121,
    "CaSO4(s)": -1434,
    "C(g)": 716.7,
    "C(s, graphite)": 0,
    "C(s, diamond)": 1.9,
    "CCl4(g)": -102.9,
    "CCl4(l)": -135.4,
    "C2N2(g)": 308.9,
    "CN-(aq)": 151,
    "HCN(g)": 135,
    "HCN(l)": 105,
    "HCN(aq)": 105,
    "CO(g)": -110.5,
    "CO2(g)": -393.5,
    "CO2(aq)": -412.9,
    "CO32-(aq)": -677.1,
    "HCO3-(aq)": -691.11,
    "H2CO3(aq)": -698.7,
    "C3O2(g)": -93.72,
    "C3O2(l)": -117.3,
    "COCl2(g)": -220.9,
    "CH3Cl(g)": -83.7,
    "CH2Cl2(l)": -117,
    "CHCl3(l)": -132,
    "COS(g)": -138.4,
    "CS2(g)": 117,
    "CS2(l)": 89.7,
    "Cs+(g)": 458.5,
    "Cs+(aq)": -248,
    "Cs(g)": 76.7,
    "Cs(s)": 0,
    "CsF(s)": -554.7,
    "CsCl(s)": -442.8,
    "CsBr(s)": -395,
    "CsI(s)": -337,
    "Cl(g)": 121.7,
    "Cl-(aq)": -167.2,
    "Cl-(g)": -234,
    "Cl2(g)": 0,
    "ClF3(g)": -163.2,
    "ClO2(g)": 102.5,
    "Cl2O(g)": 80.33,
    "HCl(g)": -92.31,
    "HCl(aq)": -167.2,
    "Cr(s)": 0,
    "CrCl2(s)": -395.4,
    "CrCl3(s)": -556.5,
    "Cr2O3(s)": -1135,
    "CrO42-(aq)": -881.2,
    "Cr2O72-(aq )": -1490.3,
    "[Cr(H2O)6]3+(aq)": -1971,
    "Co(s)": 0,
    "Co2+(aq)": -67.4,
    "Co3+(aq)": 92,
    "CoO(s)": -237.9,
    "Co3O4(s)": -891,
    "Co(OH)2(s, pink)": -539.7,
    "CoCl2(s)": -312.5,
    "Cu(s)": 0,
    "Cu(g)": 341.1,
    "Cu+(aq)": 51.9,
    "Cu2+(aq)": 64.77,
    "CuCl2(s)": -220.1,
    "CuCO3xCu(OH)2(s)": -1051,
    "Cu2O(s)": -168.6,
    "CuO(s)": -157.3,
    "Cu(OH)2(s)": -450.2,
    "CuSO4x5H2O(s)": -2279.6,
    "F(g)": 78.99,
    "F-(g)": -255.6,
    "F-(aq)": -332.6,
    "F2(g)": 0,
    "HF(g)": -271.1,
    "He(g)": 0,
    "H(g)": 218,
    "H+(g)": 1536.3,
    "H+(aq)": 0,
    "H3O+(aq)": -285.8,
    "H2(g)": 0,
    "HI(g)": 26.48,
    "HNO3(l)": -173.2,
    "HNO3(aq)": -207.4,
    "H2O(g)": -241.8,
    "H2O(l)": -285.8,
    "H2O2(g)": -136.1,
    "H2O2(l)": -187.8,
    "H2O2(aq)": -191.2,
    "H2S(g)": -20.63,
    "H2SO4(l)": -814,
    "H2SO4(aq)": -909.3,
    "I(g)": 106.8,
    "I-(g)": -194.7,
    "I-(aq)": -55.19,
    "I2(g)": 62.44,
    "I2(s)": 0,
    "IBr(g)": 40.84,
    "ICl(g)": 17.78,
    "ICl(l)": -23.89,
    "Fe(s)": 0,
    "Fe(l)": 13.13,
    "Fe2+(aq)": -89.1,
    "Fe3+(aq)": -48.5,
    "FeCO3(s)": -740.6,
    "FeCl2(s)": -341.8,
    "FeCl3(s)": -399.5,
    "FeO(s)": -272,
    "Fe2O3(s)": -824.2,
    "Fe3O4(s)": -1118.4,
    "Fe(OH)3(s)": -823,
    "Pb(s)": 0,
    "Pb2+(aq)": -1.7,
    "PbBr2(s)": -278.7,
    "PbCl2(s)": -359,
    "PbI2(s)": -175.5,
    "PbO(s)": -219,
    "PbO2(s)": -277,
    "PbS(s)": -98.3,
    "PbSO4(s)": -919.9,
    "Li(s)": 0,
    "Li+(aq)": -278.5,
    "Li(g)": 161,
    "Li+(g)": 687.163,
    "LiF(s)": -616.9,
    "LiCl(s)": -408.6,
    "LiBr(s)": -351,
    "LiI(s)": -270,
    "Li2O(s)": -597.94,
    "LiOH(s)": -484.9,
    "LiNO3(s)": -483.1,
    "Mg(s)": 0,
    "Mg(g)": 150,
    "Mg+(g)": 894.1,
    "Mg2+(g)": 2351,
    "Mg2+(aq)": -466.9,
    "MgCl2(s)": -641.3,
    "MgCO3(s)": -1096,
    "MgF2(s)": -1124,
    "MgO(s)": -601.7,
    "MgOH+(aq)": "",
    "Mg(OH)2(s)": -924.7,
    "Mg3N2(s)": -461,
    "MgSO4(s)": -1285,
    "Mn(s, )": 0,
    "Mn2+(aq)": -220.8,
    "MnCl2(s)": -481.3,
    "MnO2(s)": -520,
    "MnO4-(aq)": -541.4,
    "MnO42-(aq)": -653,
    "Hg(g)": 61.32,
    "Hg(l)": 0,
    "Hg2+(aq)": "",
    "Hg22+(aq)": 172.4,
    "HgCl2(s)": -230,
    "Hg2Br2(s)": -206.9,
    "Hg2Cl2(s)": -265.4,
    "Hg2I2(s)": -121.3,
    "HgO(s)": -90.83,
    "Ni(s)": 0,
    "Ni2+(aq)": -64,
    "NiCl2(s)": -305.3,
    "Ni(OH)2(s)": -529.7,
    "N(g)": 472.7,
    "N2(g)": 0,
    "NF3(g)": -124.7,
    "NH3(g)": -46.11,
    "NH3(aq)": -80.29,
    "NH4+(aq)": -132.5,
    "NH4Br(s)": -270.8,
    "NH4Cl(s)": -314.4,
    "NH4F(s)": -464,
    "NH4HCO3(s)": -849.4,
    "NH4I(s)": -201.4,
    "NH4NO3(s)": -365.6,
    "NH4NO3(aq)": -339.9,
    "(NH4)2SO4(s)": -1181,
    "N2H4(g)": 95.4,
    "N2H4(l)": 50.63,
    "NO(g)": 90.25,
    "N2O(g)": 82.05,
    "NO2(g)": 33.18,
    "N2O4(g)": 9.16,
    "N2O4(l)": -19.6,
    "N2O5(g)": 11.3,
    "NO3-(aq)": -205,
    "NOBr(g)": 82.17,
    "NOCl(g)": 51.71,
    "O(g)": 249.2,
    "O2(g)": 0,
    "O3(g)": 142.7,
    "OH-(aq)": -230,
    "OF2(g)": 24.5,
    "P(g)": 333.9,
    "P(s)": 0,
    "P4(s)": -17.6,
    "P2(g)": 146.2,
    "P4(g)": 58.9,
    "PCl3(g)": -287,
    "PCl3(l)": -319.7,
    "PCl5(g)": -374.5,
    "PCl5(l)": -443.5,
    "PH3(g)": 5.4,
    "P4O10(s)": -2984,
    "PO43-(aq)": -1277,
    "HPO42-(aq)": -1292.1,
    "H2PO4-(aq)": -1296.3,
    "H3PO4(aq)": -1288.3,
    "K(g)": 89.24,
    "K(l)": 2.28,
    "K(s)": 0,
    "K+(aq)": -252.4,
    "K+(g)": 514.197,
    "KBr(s)": -393.8,
    "KCN(s)": -113,
    "KCl(s)": -436.7,
    "KClO3(s)": -397.7,
    "KClO4(s)": -432.8,
    "KF(s)": -567.3,
    "KI(s)": -327.9,
    "KNO3(s)": -494.6,
    "KOH(s)": -424.8,
    "KOH(aq)": -482.4,
    "K2SO4(s)": -1438,
    "Rb+(g)": 495.04,
    "Rb+(aq)": -246,
    "Rb(g)": 85.81,
    "Rb(s)": 0,
    "RbF(s)": -549.28,
    "RbCl(s)": -430.58,
    "RbBr(s)": -389.2,
    "RbI(s)": -328,
    "Si(s)": 0,
    "SiH4(g)": 34,
    "Si2H6(g)": 80.3,
    "SiO2(s)": -910.9,
    "Ag(s)": 0,
    "Ag(g)": 289.2,
    "Ag+(aq)": 105.6,
    "AgBr(s)": -100.4,
    "AgCl(s)": -127.1,
    "AgF(s)": -203,
    "AgI(s)": -61.84,
    "AgNO3(s)": -124.4,
    "Ag2O(s)": -31,
    "Ag2S(s)": -31.8,
    "Ag2SO4(s)": -715.9,
    "Na(g)": 107.3,
    "Na(l)": 2.41,
    "Na(s)": 0,
    "Na+(aq)": -240.1,
    "Na+(g)": 609.839,
    "Na2(g)": 142,
    "NaBr(s)": -361.1,
    "Na2CO3(s)": -1131,
    "NaHCO3(s)": -950.8,
    "NaCl(s)": -411.1,
    "NaCl(aq)": -407.3,
    "NaClO3(s)": -365.8,
    "NaClO4(s)": -383.3,
    "NaF(s)": -573.7,
    "NaH(s)": -56.27,
    "NaI(s)": -287.8,
    "NaNO3(s)": -467.9,
    "NaNO3(aq)": -447.4,
    "Na2O2(s)": -510.9,
    "NaOH(s)": -425.6,
    "NaOH(aq)": -469.2,
    "NaH2PO4(s)": -1537,
    "Na2HPO4(s)": -1748,
    "Na3PO4(s)": -1917,
    "NaHSO4(s)": -1125,
    "Na2SO4(s)": -1387,
    "Na2SO4(aq)": -1390,
    "Na2SO4x10H2O(s)": -4327,
    "Na2S2O3(s)": -1123,
    "Sr2+(g)": 1784,
    "Sr2+(aq)": -545.8,
    "Sr+(g)": 719.6,
    "Sr(g)": 164,
    "Sr(s)": 0,
    "SrCl2(s)": -828.4,
    "SrF2(s)": -1216.3,
    "SrO(s)": -592,
    "SrCO3(s)": -1218,
    "SrSO4(s)": -1445,
    "S(s, rhombic)": 0,
    "S(s, monoclinic)": 0.3,
    "S8(g)": 102.3,
    "S(g)": 279,
    "S2(g)": 129,
    "S2-(aq)": 41.8,
    "HS-(aq)": -17.7,
    "H2S(aq)": -39,
    "S2Cl2(g)": -18.4,
    "SF6(g)": -1209,
    "SO2(g)": -296.8,
    "SO3(g)": -395.7,
    "SO42-(aq)": -909.3,
    "HSO4-(aq)": -885.75,
    "S2O32-(aq )": -648.5,
    "SO2Cl2(g)": -364,
    "SO2Cl2(aq)": -394.1,
    "Sn(s, white)": 0,
    "Sn(s, gray)": -2.1,
    "SnCl4(l)": -511.3,
    "SnO(s)": -286,
    "SnO2(s)": -580.7,
    "Ti(s)": 0,
    "TiCl2(s)": -513.8,
    "TiCl3(s)": -720.9,
    "TiCl4(g)": -763.2,
    "TiCl4(l)": -804.2,
    "TiO2(s)": -944.7,
    "U(s)": 0,
    "UF6(g)": -2147,
    "UF6(s)": -2197,
    "UO2(s)": -1085,
    "Zn(s)": 0,
    "Zn(g)": 130.5,
    "Zn2+(aq)": -153.9,
    "ZnCl2(s)": -415.1,
    "Zn(OH)2(s)": -641.9,
    "ZnO(s)": -348.3,
    "ZnS(s)": -203,
    "CH4(g)": -74.81,
    "C2H2(g)": 226.7,
    "C2H4(g)": 52.26,
    "C2H6(g)": -84.68,
    "C3H8(g)": -103.8,
    "C4H10(g)": -125.7,
    "C6H6(g)": 82.93,
    "C6H6(l)": 48.99,
    "C6H12(g)": -123.1,
    "C6H12(l)": -156.2,
    "C10H8(g)": 149,
    "C10H8(s)": 75.3,
    "HCHO(g)": -117,
    "CH3OH(g)": -200.7,
    "CH3OH(l)": -238.7,
    "CH3CHO(g)": -166.1,
    "CH3CHO(l)": -191.8,
    "C2H5OH(g)": -234.4,
    "C2H5OH(l)": -277.7,
    "C6H5OH(s)": -165,
    "(CH3)2CO(g)": -216.6,
    "(CH3)2CO(l)": -247.6,
    "HCOOH(l)": -409,
    "HCOOH(aq)": -410,
    "HCOO-(aq)": -410,
    "CH3COOH(g)": -432.3,
    "CH3COOH(l)": -484.1,
    "CH3COOH(aq)": -488.3,
    "C6H5COOH(s)": -385.1,
    "CH3NH2(g)": -23,
    "C6H5NH2(g)": 86.86,
    "C6H5NH2(l)": 31.6,
    "C6H12O6(s)": -1273.3,
    "C12H22O11(s)": -2226.1
  };
