var earthquakes = [
  ['2015-09-20T16:55:21.558Z', 193, 150, '10.9', '3.4', 'ml', 'nn00511445', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-09-20T13:06:22.800Z', 421, 272, '4.79', '3', 'mb_lg', 'us20003m6q', '8km W of Cushing, Oklahoma', 'OK', '40119'] ,
  ['2015-09-19T08:33:28.000Z', 157, 415, '13', '3.1', 'ml', 'ak11713604', '98km NW of Arctic Village, Alaska', 'AK', '02185'] ,
  ['2015-09-19T05:44:27.870Z', 422, 269, '5', '3', 'mb_lg', 'us20003lqz', '1km W of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-09-19T04:20:12.980Z', 410, 273, '5', '3.1', 'mb_lg', 'us20003lpu', '0km SSW of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-09-19T01:47:31.000Z', 225, 406, '68.3', '3.1', 'ml', 'ak11713338', '95km SW of Delta Junction, Alaska', 'AK', '02170'] ,
  ['2015-09-18T23:51:56.320Z', 422, 272, '1.61', '3.1', 'mb_lg', 'us20003ln7', '6km W of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-09-18T20:11:48.663Z', 379, 150, '5.9', '3.6', 'ml', 'nn00511265', '22km ESE of Hawthorne, Nevada', 'NV', '32021'] ,
  ['2015-09-18T13:10:02.780Z', 421, 272, '5', '3.2', 'mb_lg', 'us20003l7i', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-09-18T12:35:17.550Z', 417, 272, '3.69', '4.1', 'mb_lg', 'us20003l6t', '7km WNW of Cushing, Oklahoma', 'OK', '40119'] ,
  ['2015-09-18T09:16:56.250Z', 410, 274, '3.04', '3.5', 'mb_lg', 'us20003l5f', '3km WNW of Cushing, Oklahoma', 'OK', '40119'] ,
  ['2015-09-18T02:12:01.030Z', 147, 226, '8.48', '3.7', 'mb_lg', 'us20003l2d', '27km SW of Pratt, Kansas', 'KS', '20007'] ,
  ['2015-09-18T01:08:48.000Z', 109, 411, '0.6', '3.4', 'ml', 'ak11710940', '81km NW of Yakutat, Alaska', 'AK', '02282'] ,
  ['2015-09-17T22:32:49.860Z', 215, 219, '8.188', '3.77', 'ml', 'hv61040541', '18km S of Fern Acres, Hawaii', 'HI', '15001'] ,
  ['2015-09-17T20:47:27.701Z', 188, 151, '11.8', '3.1', 'ml', 'nn00511125', '70km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-09-17T15:03:29.500Z', 402, 272, '4.889', '3.1', 'ml', 'us20003klk', '7km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-09-17T03:38:37.000Z', 90, 422, '57.4', '4.3', 'ml', 'ak11705306', '68km S of Cantwell, Alaska', 'AK', '02170'] ,
  ['2015-09-17T00:10:59.000Z', 89, 414, '28.2', '3', 'ml', 'ak11704919', '33km NE of Sutton-Alpine, Alaska', 'AK', '02170'] ,
  ['2015-09-17T00:07:42.000Z', 116, 240, '0.1', '3.2', 'ml', 'ak11704914', '74km NW of Yakutat, Alaska', 'AK', '02282'] ,
  ['2015-09-16T19:34:08.420Z', 146, 270, '5.8', '3.2', 'ml', 'us20003k43', '27km NNE of Socorro, New Mexico', 'NM', '35053'] ,
  ['2015-09-16T19:34:02.100Z', 405, 269, '9.424', '3', 'ml', 'us20003k50', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-09-16T16:10:47.340Z', 111, 272, '11.177', '4.01', 'mw', 'ci37243591', '13km SSE of Big Bear Lake, California', 'CA', '06071'] ,
  ['2015-09-16T15:17:36.170Z', 410, 272, '5', '3.4', 'mb_lg', 'us20003jzj', '1km WSW of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-09-16T13:44:36.880Z', 195, 223, '4.37', '3.24', 'md', 'nc72525806', '17km NNW of Mammoth Lakes, California', 'CA', '06051'] ,
  ['2015-09-16T12:09:52.560Z', 425, 272, '5', '3.5', 'mb_lg', 'us20003jxh', '1km E of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-09-16T09:06:57.000Z', 222, 419, '70.3', '3.1', 'ml', 'ak11703292', '58km NNW of Nikiski, Alaska', 'AK', '02122'] ,
  ['2015-09-16T04:48:01.060Z', 116, 269, '7.21', '4', 'mb_lg', 'us20003jvv', '25km ENE of Mooreland, Oklahoma', 'OK', '40093'] ,
  ['2015-09-16T03:27:57.820Z', 147, 245, '11.918', '3.28', 'ml', 'ci37243311', '5km S of Brawley, California', 'CA', '06025'] ,
  ['2015-09-16T02:30:02.180Z', 420, 274, '5', '3.7', 'mwr', 'us20003jvi', '3km WNW of Cushing, Oklahoma', 'OK', '40119'] ,
  ['2015-09-15T23:45:32.640Z', 163, 272, '4.29', '3.3', 'mb_lg', 'us20003juv', '25km ENE of Mooreland, Oklahoma', 'OK', '40151'] ,
  ['2015-09-15T22:57:14.020Z', 150, 271, '3.03', '3.3', 'mb_lg', 'us20003jul', '30km E of Mooreland, Oklahoma', 'OK', '40093'] ,
  ['2015-09-15T16:28:42.990Z', 404, 274, '5', '3', 'mb_lg', 'us20003jng', '5km NNE of Edmond, Oklahoma', 'OK', '40109'] ,
  ['2015-09-15T13:58:40.800Z', 423, 271, '6.372', '3', 'ml', 'us20003jmb', '3km WNW of Choctaw, Oklahoma', 'OK', '40109'] ,
  ['2015-09-15T12:46:06.150Z', 127, 144, '3.25', '3', 'ml', 'nc72525476', '6km NW of The Geysers, California', 'CA', '06097'] ,
  ['2015-09-14T17:25:29.100Z', 415, 272, '5.391', '3.3', 'ml', 'us20003je6', '15km NE of Edmond, Oklahoma', 'OK', '40083'] ,
  ['2015-09-14T14:12:05.845Z', 169, 143, '8.2896', '3.05', 'ml', 'nn00510527', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-09-14T13:55:48.087Z', 189, 153, '9.7', '4.7', 'ml', 'nn00510518', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-09-14T08:02:45.260Z', 396, 234, '7.02', '3.22', 'ml', 'nc72525076', '17km ESE of Mammoth Lakes, California', 'CA', '06051'] ,
  ['2015-09-14T07:04:30.360Z', 423, 271, '3.62', '3.1', 'mb_lg', 'us20003j9c', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-09-14T02:06:24.550Z', 419, 272, '5', '3.1', 'mb_lg', 'us20003j8n', '18km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-08-10T22:12:28.640Z', 198, 157, '1', '4.1', 'mb', 'us100030zg', '93km W of Gustavus, Alaska', 'AK', '02105'] ,
  ['2015-08-10T21:10:05.000Z', 130, 171, '8.1', '3.1', 'ml', 'ak11675311', '138km NE of Chignik Lake, Alaska', 'AK', '02164'] ,
  ['2015-08-10T20:47:35.560Z', 414, 270, '5', '3.1', 'mb_lg', 'us100030x0', '21km SSE of Anthony, Kansas', 'OK', '40053'] ,
  ['2015-08-10T17:39:38.300Z', 138, 271, '5.705', '3.5', 'ml', 'us100030ur', '17km NE of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-08-10T07:53:57.700Z', 192, 236, '1', '4', 'mwr', 'us100030q6', '47km E of Yakutat, Alaska', 'AK', '02282'] ,
  ['2015-08-10T01:44:13.600Z', 400, 269, '0.113', '3', 'ml', 'us100030p6', '13km SSW of Caldwell, Kansas', 'OK', '40053'] ,
  ['2015-08-09T23:12:30.000Z', 148, 414, '15.8', '3.9', 'ml', 'ak11674020', '80km NNE of Fort Yukon, Alaska', 'AK', '02290'] ,
  ['2015-08-09T16:26:34.300Z', 152, 273, '4.936', '3.1', 'ml', 'us100030kq', '9km ENE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-08-09T09:35:40.420Z', 155, 239, '5.351', '3', 'ml', 'uw61064016', '15km ENE of Cle Elum, Washington', 'WA', '53037'] ,
  ['2015-08-09T07:05:33.200Z', 418, 269, '0.672', '3.5', 'ml', 'us100030ik', '6km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-09T06:24:27.740Z', 118, 153, '10.7246', '3.08', 'ml', 'nn00505653', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-08-09T02:56:18.500Z', 420, 272, '6.9', '3.6', 'ml', 'us100030hu', '1km WNW of McLoud, Oklahoma', 'OK', '40125'] ,
  ['2015-08-08T13:57:32.950Z', 403, 236, '6.98', '3.2', 'ml', 'us100030fc', '15km SE of Anthony, Kansas', 'KS', '20077'] ,
  ['2015-08-08T01:48:09.400Z', 418, 269, '4.327', '3.3', 'ml', 'us100030de', '10km NNW of Yale, Oklahoma', 'OK', '40117'] ,
  ['2015-08-07T21:43:03.000Z', 421, 272, '4.663', '3', 'ml', 'us100030by', '5km SW of Perkins, Oklahoma', 'OK', '40081'] ,
  ['2015-08-07T14:51:58.800Z', 153, 271, '2.407', '3.1', 'ml', 'us1000304p', '12km S of Alva, Oklahoma', 'OK', '40151'] ,
  ['2015-08-07T14:00:02.000Z', 56, 424, '6.8', '3.2', 'ml', 'ak11671841', '60km NW of Cape Yakataga, Alaska', 'AK', '02282'] ,
  ['2015-08-07T11:18:02.000Z', 180, 409, '39.7', '3.7', 'ml', 'ak11671487', '6km WNW of Knik-Fairview, Alaska', 'AK', '02170'] ,
  ['2015-08-07T03:04:12.800Z', 422, 271, '3.501', '3', 'ml', 'us10003003', '7km SSW of Boley, Oklahoma', 'OK', '40107'] ,
  ['2015-08-06T03:51:14.500Z', 425, 274, '4.69', '3.1', 'ml', 'us10002z0q', '15km NNE of Enid, Oklahoma', 'OK', '40047'] ,
  ['2015-08-05T23:09:33.700Z', 417, 273, '3.062', '3.3', 'ml', 'us10002ybc', '20km SSW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-05T15:55:11.300Z', 411, 272, '8.782', '3', 'ml', 'us10002y5r', '16km S of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-05T14:23:48.920Z', 419, 271, '5', '3.2', 'mwr', 'us10002y3s', '22km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-08-05T13:07:12.700Z', 401, 274, '5.448', '3.2', 'ml', 'us10002y40', '7km WSW of Langston, Oklahoma', 'OK', '40083'] ,
  ['2015-08-05T12:01:12.600Z', 416, 271, '2.567', '3.5', 'ml', 'us10002y38', '6km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-05T10:06:30.000Z', 174, 402, '136.3', '3.7', 'ml', 'ak11669624', '57km SSW of Redoubt Volcano, Alaska', 'AK', '02122'] ,
  ['2015-08-05T07:48:02.300Z', 418, 272, '6.021', '4', 'ml', 'us10002y1u', '23km S of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-05T07:30:01.000Z', 407, 273, '6.704', '3.4', 'ml', 'us10002y1m', '23km S of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-05T03:42:30.880Z', 411, 270, '7.63', '3.2', 'ml', 'us10002y0p', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-08-04T22:54:23.100Z', 400, 270, '0.106', '3', 'ml', 'us10002y03', '13km SE of Guthrie, Oklahoma', 'OK', '40083'] ,
  ['2015-08-04T18:16:29.600Z', 424, 269, '3.692', '3.4', 'ml', 'us10002xxr', '7km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-04T15:06:31.690Z', 109, 154, '5', '3.3', 'mb_lg', 'us10002xuw', '34km SE of Pecos, Texas', 'TX', '48389'] ,
  ['2015-08-04T08:58:09.900Z', 181, 269, '4.303', '3.2', 'ml', 'us10002xub', '10km NNE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-08-04T04:18:30.240Z', 130, 242, '5', '3.3', 'ml', 'us10002xst', '48km NW of Lordsburg, New Mexico', 'AZ', '04011'] ,
  ['2015-08-04T03:40:59.590Z', 145, 274, '3.813', '3.21', 'ml', 'ci37219951', '38km N of Yucca Valley, California', 'CA', '06071'] ,
  ['2015-08-03T22:08:40.900Z', 179, 269, '4.033', '3.1', 'ml', 'us10002xmf', '13km SSE of Alva, Oklahoma', 'OK', '40151'] ,
  ['2015-08-03T01:56:09.000Z', 102, 421, '70.1', '4.1', 'ml', 'ak11668071', '61km S of Cantwell, Alaska', 'AK', '02170'] ,
  ['2015-08-02T16:30:41.860Z', 122, 270, '6.91', '3.01', 'ml', 'nc72499526', '29km SW of Mendota, California', 'CA', '06019'] ,
  ['2015-08-02T14:43:51.300Z', 130, 272, '6.3', '3', 'ml', 'us10002xav', '11km ESE of Alva, Oklahoma', 'OK', '40151'] ,
  ['2015-08-02T13:01:07.639Z', 177, 150, '10.6892', '3.09', 'ml', 'nn00504785', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-08-02T11:29:17.000Z', 70, 404, '39.7', '3', 'ml', 'ak11667576', '19km NW of Anchorage, Alaska', 'AK', '02170'] ,
  ['2015-08-01T20:28:48.500Z', 410, 274, '6.607', '3.3', 'mwr', 'us10002x6t', '17km SW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-08-01T18:42:18.577Z', 107, 152, '8.8771', '3.82', 'ml', 'nn00504704', '66km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-08-01T12:20:03.068Z', 127, 145, '5.4503', '3.09', 'ml', 'nn00504677', '73km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-08-01T09:07:50.000Z', 186, 410, '14.2', '4', 'ml', 'ak11666297', '119km ENE of Circle, Alaska', 'AK', '02290'] ,
  ['2015-07-31T13:26:55.700Z', 407, 271, '2.195', '3.3', 'ml', 'us10002wug', '12km N of Langston, Oklahoma', 'OK', '40119'] ,
  ['2015-07-31T03:52:13.000Z', 74, 412, '15', '3.5', 'ml', 'ak11665072', '143km W of Cantwell, Alaska', 'AK', '02068'] ,
  ['2015-07-31T01:39:21.400Z', 424, 274, '0.133', '3.3', 'ml', 'us10002wlj', '4km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-30T16:40:01.000Z', 80, 408, '59.8', '3.3', 'ml', 'ak11664633', '31km WSW of Talkeetna, Alaska', 'AK', '02170'] ,
  ['2015-07-29T23:07:32.780Z', 149, 222, '10.68', '3.22', 'ml', 'nc72496776', '14km ESE of Alum Rock, California', 'CA', '06085'] ,
  ['2015-07-29T02:35:59.000Z', 144, 152, '119.3', '6.3', 'ms', 'ak11661615', '70km SSW of Redoubt Volcano, Alaska', 'AK', '02122'] ,
  ['2015-07-28T18:47:59.250Z', 163, 211, '3.842', '3.29', 'ml', 'hv60992381', '25km E of Honaunau-Napoopoo, Hawaii', 'HI', '15001'] ,
  ['2015-07-28T12:30:36.800Z', 403, 270, '4.536', '3.3', 'ml', 'us200030sm', '4km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-28T08:11:57.500Z', 407, 274, '7.414', '3.5', 'ml', 'us200030r9', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-28T01:18:27.200Z', 412, 269, '5.253', '4.1', 'mwr', 'us200030nt', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-28T00:24:03.400Z', 418, 274, '4.658', '3.5', 'ml', 'us200030mu', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T19:27:56.900Z', 420, 271, '5', '3', 'ml', 'us200030ic', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T18:24:25.220Z', 193, 154, '6.17', '3.45', 'ml', 'nc72495466', '6km E of Point Arena, California', 'CA', '06045'] ,
  ['2015-07-27T18:12:15.400Z', 410, 269, '5', '4.5', 'mwr', 'us200030gd', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T17:49:27.900Z', 406, 271, '4.01', '3.8', 'mwr', 'us200030g9', '5km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T17:06:30.500Z', 406, 273, '5.647', '3.4', 'ml', 'us20003140', '4km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T12:31:46.600Z', 421, 270, '5.68', '3', 'ml', 'us200030dh', '5km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-27T12:19:20.410Z', 86, 168, '63.97', '4.3', 'mb', 'us200030d0', '61km W of Nikolski, Alaska', 'AK', '02016'] ,
  ['2015-07-27T09:25:04.800Z', 416, 273, '5', '3.2', 'ml', 'us200030cd', '7km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-27T09:15:40.676Z', 181, 145, '8.7962', '3.01', 'ml', 'nn00503823', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-27T07:00:30.094Z', 150, 147, '8.3973', '3.58', 'ml', 'nn00503797', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-27T05:20:23.000Z', 145, 170, '71.5', '4.5', 'mb', 'us10002wjy', '17km SSW of Adak, Alaska', 'AK', '02016'] ,
  ['2015-07-27T03:08:10.767Z', 148, 144, '8.8186', '3.08', 'ml', 'nn00503781', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-27T02:29:40.000Z', 221, 189, '150.5', '4.1', 'mb', 'us10002wir', '58km N of Sand Point, Alaska', 'AK', '02013'] ,
  ['2015-07-27T01:05:33.610Z', 198, 155, '10.72', '4.55', 'ml', 'nn00503760', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-26T16:25:32.000Z', 135, 416, '68.3', '3', 'ml', 'ak11656872', '67km WSW of Big Lake, Alaska', 'AK', '02170'] ,
  ['2015-07-26T13:26:50.480Z', 408, 269, '4.19', '3.2', 'mb_lg', 'us2000307h', '5km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-26T11:30:47.300Z', 114, 273, '5', '3.2', 'ml', 'us2000307c', '19km ENE of Mooreland, Oklahoma', 'OK', '40153'] ,
  ['2015-07-26T09:54:33.600Z', 425, 274, '5.468', '3.6', 'mwr', 'us20003074', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-26T09:15:05.500Z', 422, 273, '5.1', '3', 'ml', 'us20003073', '4km SSW of Cushing, Oklahoma', 'OK', '40119'] ,
  ['2015-07-26T06:59:44.600Z', 420, 273, '5.964', '3.2', 'ml', 'us2000306s', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-26T05:04:04.000Z', 99, 419, '117.1', '3.1', 'ml', 'ak11656458', '108km W of Willow, Alaska', 'AK', '02170'] ,
  ['2015-07-26T00:47:16.000Z', 106, 413, '64.7', '3.8', 'ml', 'ak11656368', '5km ESE of Nikiski, Alaska', 'AK', '02122'] ,
  ['2015-07-25T19:57:43.000Z', 110, 411, '125.6', '5', 'mb', 'ak11655904', '108km WNW of Willow, Alaska', 'AK', '02170'] ,
  ['2015-07-25T17:26:32.000Z', 92, 402, '11.4', '3', 'ml', 'ak11655681', '123km ENE of Circle, Alaska', 'AK', '02290'] ,
  ['2015-07-25T12:54:06.990Z', 134, 272, '5.477', '4.17', 'ml', 'ci37213455', '1km ESE of Fontana, California', 'CA', '06071'] ,
  ['2015-07-25T11:14:44.100Z', 409, 269, '4.269', '3.7', 'mwr', 'us2000302l', '4km NNE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-25T08:47:53.100Z', 416, 272, '1.296', '3', 'ml', 'us20003025', '1km W of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-07-25T04:49:02.700Z', 402, 274, '4.2', '3', 'ml', 'us2000301h', '11km ENE of Stillwater, Oklahoma', 'OK', '40119'] ,
  ['2015-07-25T04:10:33.700Z', 412, 270, '5.161', '3.2', 'ml', 'us2000301d', '24km SSE of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-24T16:21:23.000Z', 120, 274, '5.208', '3.1', 'ml', 'us20002zvw', '14km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-24T16:01:01.700Z', 401, 271, '8.233', '3.1', 'ml', 'us20002zvr', '21km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-24T13:01:53.000Z', 169, 404, '6.5', '3.1', 'ml', 'ak11654341', '29km S of Manley Hot Springs, Alaska', 'AK', '02290'] ,
  ['2015-07-24T12:31:13.900Z', 160, 269, '3.497', '3.5', 'mwr', 'us20002zuc', '14km WNW of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-07-24T08:00:34.000Z', 182, 415, '102.7', '3.3', 'ml', 'ak11654215', '58km S of Redoubt Volcano, Alaska', 'AK', '02122'] ,
  ['2015-07-23T17:33:19.900Z', 403, 273, '6.039', '3', 'ml', 'us20002zm7', '2km WNW of McLoud, Oklahoma', 'OK', '40125'] ,
  ['2015-07-23T13:28:57.500Z', 401, 271, '5', '3.3', 'ml', 'us20002ziw', '0km N of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-07-23T12:24:04.000Z', 158, 421, '3.3', '3.3', 'ml', 'ak11653844', '122km ENE of Circle, Alaska', 'AK', '02290'] ,
  ['2015-07-23T12:20:55.500Z', 415, 269, '4.323', '3.3', 'ml', 'us20002zi2', '1km NE of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-07-22T22:07:07.567Z', 113, 154, '7.8392', '3.96', 'ml', 'nn00503084', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-22T10:48:27.300Z', 401, 270, '6.216', '3.2', 'ml', 'us20002z6i', '23km S of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-22T05:23:50.168Z', 103, 144, '10.5321', '3.29', 'ml', 'nn00502945', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-22T02:55:53.100Z', 189, 147, '2.71', '3.05', 'ml', 'nc72491441', '3km W of Cobb, California', 'CA', '06033'] ,
  ['2015-07-22T01:19:30.800Z', 193, 270, '0.149', '3.2', 'ml', 'us20002z4e', '15km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-21T18:24:08.200Z', 166, 272, '5.338', '3.5', 'ml', 'us20002yz5', '13km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-21T13:10:54.020Z', 407, 272, '4', '3', 'ml', 'us20002yvv', '23km E of Waukomis, Oklahoma', 'OK', '40047'] ,
  ['2015-07-21T11:16:13.800Z', 135, 271, '5', '3.1', 'mwr', 'us20002yvl', '13km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-21T09:41:14.480Z', 186, 213, '8.38', '3.98', 'mw', 'nc72490826', '3km NNE of Fremont, California', 'CA', '06001'] ,
  ['2015-07-21T09:08:41.600Z', 127, 274, '4.946', '3.5', 'ml', 'us20002yum', '12km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-21T08:46:54.100Z', 403, 272, '2.959', '3.2', 'mwr', 'us20002yud', '22km E of Waukomis, Oklahoma', 'OK', '40047'] ,
  ['2015-07-21T07:38:28.900Z', 422, 274, '1.106', '3', 'ml', 'us20002yu5', '15km W of Perry, Oklahoma', 'OK', '40103'] ,
  ['2015-07-21T05:02:04.400Z', 409, 272, '5.696', '3.3', 'ml', 'us20002yti', '23km S of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-21T05:00:04.374Z', 171, 153, '9.1772', '3.38', 'ml', 'nn00502784', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-21T03:08:32.000Z', 221, 404, '52.5', '4.4', 'ml', 'ak11651501', '21km NNE of Y, Alaska', 'AK', '02170'] ,
  ['2015-07-21T02:10:21.400Z', 196, 270, '3.909', '3.4', 'ml', 'us20002ysx', '13km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-20T20:54:32.100Z', 110, 270, '5', '3.7', 'mwr', 'us20002yqj', '13km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-20T20:50:16.000Z', 404, 273, '5', '3.4', 'ml', 'us20002yqi', '7km NW of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-07-20T20:19:03.400Z', 159, 273, '4.079', '4.4', 'mwr', 'us20002yq7', '13km NE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-20T03:33:24.000Z', 412, 272, '3.961', '3.1', 'ml', 'us20002ylf', '16km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-19T10:54:58.737Z', 152, 153, '8.6979', '3.39', 'ml', 'nn00502564', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-19T01:36:06.880Z', 196, 151, '9.9', '3.19', 'mw', 'nc72488831', '16km NNW of Truckee, California', 'CA', '06091'] ,
  ['2015-07-17T12:52:53.424Z', 165, 149, '9.2118', '3.28', 'ml', 'nn00502186', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-17T12:30:37.800Z', 181, 274, '4.632', '3.6', 'mwr', 'us20002y4p', '17km W of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-07-16T17:14:32.288Z', 161, 151, '7.5875', '3.72', 'ml', 'nn00502003', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T10:48:56.000Z', 184, 421, '14.7', '3.2', 'ml', 'ak11647966', '121km SE of Coldfoot, Alaska', 'AK', '02290'] ,
  ['2015-07-16T09:45:34.128Z', 127, 145, '2.0946', '3.7', 'ml', 'nn00501978', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T05:51:30.423Z', 165, 146, '8.3064', '3.76', 'ml', 'nn00501971', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:57:26.295Z', 184, 147, '8.4577', '3.97', 'ml', 'nn00501947', '66km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:57:08.238Z', 176, 143, '9.4108', '3.24', 'ml', 'nn00502072', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:52:11.994Z', 128, 148, '10.0819', '4.61', 'ml', 'nn00501944', '66km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:50:49.182Z', 165, 145, '8.7922', '3.43', 'ml', 'nn00501936', '69km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:50:17.512Z', 170, 145, '10.0111', '3.37', 'ml', 'nn00501929', '67km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-16T01:45:50.799Z', 120, 145, '9.502', '3.23', 'ml', 'nn00501962', '68km ESE of Lakeview, Oregon', 'NV', '32031'] ,
  ['2015-07-15T12:51:32.000Z', 110, 417, '58.5', '3.5', 'ml', 'ak11647512', '35km WSW of Big Lake, Alaska', 'AK', '02170'] ,
  ['2015-07-15T08:57:15.900Z', 409, 269, '4.136', '3.4', 'mwr', 'us20002xl4', '4km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-15T08:13:07.000Z', 207, 412, '18', '3.1', 'ml', 'ak11647417', '2km NNE of North Pole, Alaska', 'AK', '02090'] ,
  ['2015-07-14T10:58:51.900Z', 408, 272, '4.783', '3.2', 'ml', 'us20002xdd', '7km SSW of Guthrie, Oklahoma', 'OK', '40083'] ,
  ['2015-07-14T08:22:15.000Z', 425, 273, '4.776', '3.2', 'mwr', 'us20002xd1', '17km S of Blanchard, Oklahoma', 'OK', '40051'] ,
  ['2015-07-14T01:33:58.700Z', 423, 273, '6.169', '3.4', 'ml', 'us20002xbz', '13km NW of Edmond, Oklahoma', 'OK', '40083'] ,
  ['2015-07-13T23:52:35.220Z', 385, 219, '11.11', '3.01', 'ml', 'nc72485081', '26km NW of West Bishop, California', 'CA', '06051'] ,
  ['2015-07-13T15:47:14.000Z', 173, 420, '17.1', '3.1', 'ml', 'ak11645813', '31km SE of Noatak, Alaska', 'AK', '02188'] ,
  ['2015-07-12T22:37:21.700Z', 121, 270, '5.425', '3.1', 'ml', 'us20002x0k', '25km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-11T22:49:25.000Z', 121, 419, '38.7', '3.5', 'ml', 'ak11644918', '50km ENE of Y, Alaska', 'AK', '02170'] ,
  ['2015-07-11T21:52:09.100Z', 168, 274, '5', '3.1', 'ml', 'us20002y6w', '17km W of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-07-11T09:23:35.300Z', 407, 271, '3.855', '3.7', 'mwr', 'us20002wrz', '8km NW of Perkins, Oklahoma', 'OK', '40119'] ,
  ['2015-07-11T01:21:19.700Z', 402, 273, '7.2', '3.1', 'ml', 'us20002wqa', '21km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-11T00:56:53.000Z', 406, 274, '7.44', '3.6', 'ml', 'us20002wq4', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-10T23:09:16.700Z', 184, 272, '5.426', '3.7', 'mwr', 'us20002wp9', '12km SSE of Cherokee, Oklahoma', 'OK', '40003'] ,
  ['2015-07-10T09:58:56.700Z', 143, 271, '4.243', '3.5', 'ml', 'us20002wiu', '17km W of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-07-10T03:29:49.160Z', 132, 150, '3.85', '3.83', 'mw', 'nc72483061', '4km NW of The Geysers, California', 'CA', '06097'] ,
  ['2015-07-09T06:45:19.600Z', 402, 272, '5', '3', 'ml', 'us20002w8e', '9km E of Luther, Oklahoma', 'OK', '40081'] ,
  ['2015-07-08T16:33:28.700Z', 417, 272, '6.21', '3.4', 'ml', 'us20002w1z', '13km NE of Edmond, Oklahoma', 'OK', '40083'] ,
  ['2015-07-08T12:55:22.000Z', 105, 178, '84.8', '3.2', 'ml', 'ak11643623', '93km NE of Chignik Lake, Alaska', 'AK', '02164'] ,
  ['2015-07-08T01:13:20.500Z', 402, 273, '5.499', '3', 'ml', 'us20002vzj', '13km WNW of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-07T10:53:12.300Z', 424, 271, '5', '3.1', 'ml', 'us20002vq0', '13km NE of Edmond, Oklahoma', 'OK', '40083'] ,
  ['2015-07-06T06:20:39.700Z', 405, 271, '5.581', '3.3', 'ml', 'us10002nlw', '13km NE of Edmond, Oklahoma', 'OK', '40083'] ,
  ['2015-07-06T00:50:33.000Z', 121, 404, '70.7', '4.8', 'ml', 'ak11641900', '41km WSW of Talkeetna, Alaska', 'AK', '02170'] ,
  ['2015-07-06T00:49:57.000Z', 91, 409, '71.9', '4.2', 'ml', 'ak11641890', '41km WSW of Talkeetna, Alaska', 'AK', '02170'] ,
  ['2015-07-04T21:00:27.700Z', 170, 272, '3.151', '3.6', 'ml', 'us10002nfr', '18km W of Helena, Oklahoma', 'OK', '40003'] ,
  ['2015-07-04T16:00:03.950Z', 189, 211, '3.35', '4.06', 'mw', 'uu60116197', '3km NW of Panguitch, Utah', 'UT', '49017'] ,
  ['2015-07-04T15:42:18.100Z', 156, 158, '9.889', '4.21', 'ml', 'uw61037147', '15km ENE of Springfield, Oregon', 'OR', '41039'] ,
  ['2015-07-04T12:33:51.500Z', 402, 273, '5', '3.1', 'ml', 'us10002ne9', '16km ESE of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-04T11:57:56.600Z', 406, 270, '5.7', '3.3', 'mwr', 'us10002ne3', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-04T01:05:22.700Z', 411, 272, '3.8', '3.4', 'mwr', 'us10002ncr', '7km SW of Pawnee, Oklahoma', 'OK', '40117'] ,
  ['2015-07-03T10:43:54.500Z', 421, 273, '6.445', '3', 'ml', 'us10002n8a', '16km ESE of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-03T05:19:31.600Z', 408, 270, '5', '3.5', 'mwr', 'us10002n6g', '20km W of Perry, Oklahoma', 'OK', '40047'] ,
  ['2015-07-02T22:40:35.000Z', 417, 273, '4.914', '3.1', 'ml', 'us10002n4d', '2km NNE of Medford, Oklahoma', 'OK', '40053'] ,
  ['2015-07-02T20:28:37.200Z', 406, 273, '5', '3.2', 'ml', 'us10002n3k', '15km NNW of Perry, Oklahoma', 'OK', '40103'] ,
  ['2015-07-02T19:38:39.760Z', 189, 200, '11.718', '3.57', 'ml', 'ci37196663', '5km W of Brawley, California', 'CA', '06025'] ,
  ['2015-07-02T02:18:27.000Z', 136, 409, '26.8', '3.7', 'ml', 'ak11639524', '60km WSW of Valdez, Alaska', 'AK', '02261'] ,
  ['2015-07-01T21:59:53.800Z', 406, 272, '5.508', '3.3', 'ml', 'us10002mx3', '19km NE of Crescent, Oklahoma', 'OK', '40083'] ,
  ['2015-07-01T17:15:47.900Z', 415, 270, '3.848', '3.5', 'mwr', 'us10002mv7', '4km SW of Stillwater, Oklahoma', 'OK', '40119'] ,
  ['2015-07-01T12:15:29.000Z', 74, 424, '140.1', '3.1', 'ml', 'ak11639060', '39km SW of Redoubt Volcano, Alaska', 'AK', '02122']  
]

var curr = 0;
var beg = 0;

function drawOneQuake(i){
  var canvas = document.getElementById("quakecanvas")
  var context = canvas.getContext("2d")
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  //Debugging
  //console.log(earthquakes[i])
  
  for (var i = beg; i < curr; i++) {
    
    color = 'white';
    size = 5;
    magnitude = earthquakes[i][4];

    if (magnitude > 6.5) {
      color = 'red';
      size = 15;
    }
    else if (magnitude > 4.5) {
      color = 'orange';
      size = 12;
    }
    else if (magnitude > 3.5) {
      color = 'yellow';
      size = 10;
    }
    
  //Draw a filled-in circle
    context.fillStyle =  color;
    context.beginPath();
    context.arc(earthquakes[i][1], earthquakes[i][2], size, 0, 2*Math.PI);
    //Lattitude,Longitude,radius of circle, centre of circle , circumference of circle
    context.fill();
  
    //Draw border around it, stroke implies border
    context.strokeStyle = color;
    context.beginPath();
    context.arc(earthquakes[i][1], earthquakes[i][2], size + 3, 0, 2*Math.PI);
    context.stroke();
  }
  if (curr < earthquakes.length){
    curr++;
  }
  //Only 20 points get displayed at a time, older points disappear
  if (curr > 20) {
    beg++;
  }
  
  context.font = "42px Verdana";
  context.fillStyle = "white";
  var num_quakes = curr.toString();
  var txt_out = 'Earthquakes:' + num_quakes;
  context.fillText(txt_out,400,500)
}

function drawAllQuakes(){
  setInterval(drawOneQuake,250);
  //500 = 0.5 s
}