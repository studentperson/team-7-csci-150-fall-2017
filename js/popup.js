//var openpgp = window.openpgp;
var openpgp;
var gprivkey;
var gpubkey;
var gpword;
var gemessage;
var gdmessage = "";
var gkeyobj;
var gemail;
var gprivkeyobj;

var gprivkeyobj00;
var gprivkeyobj01;

var gstrpart00;
var gstrpart01;
var gstrpart02;
var gstrtest00;
var gstrtest01;
var gstrtest02;
var gstrtest03;
var gindex00;
var gindex01;

//var privKeyObj;
var funcdone = false;

var messageBox = document.getElementById("mbody");


				var nmstuff00 = new Object();
	nmstuff00.privatekey = [
'-----BEGIN PGP PRIVATE KEY BLOCK-----',
'Version: OpenPGP.js v2.5.10',
'Comment: https://openpgpjs.org',
'',
'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',
'a5KqxxdAwQ==',
'=XA7J',
'-----END PGP PRIVATE KEY BLOCK-----',
'',
].join('\n');
	nmstuff00.publickey = [
'-----BEGIN PGP PUBLIC KEY BLOCK-----',
'Version: OpenPGP.js v2.5.10',
'Comment: https://openpgpjs.org',
'',
'xsFNBFodypEBEACSPe1fyRBwCfnR8Tz1XLXsOneN1rmn0EM6vCuUJmJl+pK+',
'TEvk00mpVX/kWnQSbWS1FCIsYcbgjOSoKC650TQbiEd5vsM7PiNIwaC4B9bk',
'Kz+hYq/nIqrBTy6XyTcM1aYowdIkN8ez45E8pHgUVPk54PdpnAt+qo23ArXv',
'ssyw0CRLUabQH8JXkTj2l+KhTDjc1P1CwEW+kbahalHjKuOEeOOfw6G+mwjV',
'OSOqAnOBsx2cJCH8ZwixgANvKSaEYBoXJPFU6IngvI25KTZynyMDXBC+pQQw',
'cDU+sj7UUQsbwMfOI2twRuAQsJ3VTUJ9UVT6z9pnv7W8gzrioG8bJ6sGTIXG',
'bQn3x7eIJBg80ptxtP5F3rEDNNu/DHRWLB7lJU65dtg2XSF7PWJD3WQXBSSj',
'd84g/rIjuJLl7oya5OSEYHKKNPA8cUhterxDslQEXJdPj5FlFpVuWpqzeNkL',
'3rwoOVJV89Ocds5A9pYKiN013Rb3OxzJS4qnAA+qMuGf+7UD2QmgsJ8NXsmM',
'g9z8ivOI96Wbrckp7zzbiisISwteuC2nfisYS7Wh7IUY86/7+lkXQD17TLpN',
'e7vaqhQqShEngS+P5IjNCRHOi0LhIqEpWtlZm0yXTVp537YMknU0yA3X4E6v',
'ttNUGLNNoMVMS8cZjIG/tD5amXfirQh22RwOdQARAQABzRU8c29tZW9uZUBl',
'eGFtcGxlLmNvbT7CwXUEEAEIACkFAlodyp4GCwkHCAMCCRANsV5q3aKR3wQV',
'CAoCAxYCAQIZAQIbAwIeAQAAWmMQAIsy1ZmYTyralBhtqGguaRLVADGm72AX',
't5hSHO+bAol0Jl/WLLZKvV+CQGdiG4hFbgwjhHuKk46Htl5QCiGW0+14ASox',
'4IXHHL4El03KgMjfOwudMENPGEgkES9/pz4317gX5YPj9/zKYscVIRlC+yyo',
'k2zv0gFCAbaAb5MWAlPtzi6wcCUMiMhyuAPkZmvYZUzO/3hOfkUxKeeoYrPV',
'hIW/dmOLfbmBoIWWKmJTPx1ohBpEFXW4fuStn1xXsWnts+ijVpGqa6Yv/kFu',
'pYsjECdsCt1yMvz/FLXHYli0U3xfVdOLZh/MyRTKs53oVAHwTdrk+/X5VWpB',
'Ft8+FnKnsQDeLKXb8PNYPGlX9PZdXWqeAwXdAiAuZY4Lc4oPK4LGzjnT/cBJ',
'E27x4rMLUdq8k7vQVgzZwu8wFJr0DE7agNSp9mxM3XmuotakSu0IEQq1vm+3',
'7eehKwrYXkn7OZoyNT89Glwoug1J6G+qA2Pmm6gqBVOAg7gbfuteO2jTC1Ya',
'nC30cwK+AVC6WUiHulW2HiTokHxh541FtKJTFW0/n3DDn3YjYe1loi+odpvr',
'EjU7CBm5MGt41H3BAPyJslBlHJWbNorp8Tyd9AJD0eyvXFmkDs/5lD3RXd90',
'XyqT1v+8npF7mDfr+DmqOMYteZkeq5bydNuHjYvfZMdBPYWsP0LozsFNBFod',
'ypEBEACZvtz+ewP/5KbW3Vmmmg5Ag+NsS2FUhIVxT6SGMYImWflQg3QifFyv',
'gP7Y65IPWso/Oriwt4MzPxgJM1gJlHFTAvjQbCtONgcUA5v5i3KKMSAIpWSm',
'migi2DOwAgyFyOlQlINx2Tqcmrm2SaXZ0NBBQMinM0Q6ZkZ9UCpdg7I3GLDn',
'nMu4FSMmHWaxL0cBKHvMMpy8hvdJMzih2SOeAbbCKEOPcwB0E3KMmt+SdVIL',
'vtOh5o6t3KpGwF6DUOPAHdBjczMvQjBIhaHJsKdEDFnkOqzUG9LarJLOIQHm',
'18yhn+vsK1/cXf+sjeAEtWvjhGrNt3ogfctHEh8fEiJJg4OFeNK2lQa/N2FT',
'deny/m2uCQtx1ZQjcRQwOUXl1crTrfObzfe/NQvw8oKUOUmAqWpt7lA5x9Nm',
'QmGMQM9cmH5fePVU3aziRz2VsZBIt8GAZ0n2UPaq34vwLuS4//0o6OD/9imm',
'ky+qyE8idpcxCk+0Ev5hjJT9/IZELUV2K7jVGNNFJlgjoeI+pM/GJgGdX/X5',
'ghZPvx6N6/BgCVFBcbXz3Svlw1b8fCGyGvE8xecZttRzd8Tn8VGZRkm/E72Q',
'C1IGkp6QGypEF7bbDh8ZR2HfyfOdjZiNp0KJpEyrG2p/1ff2Cewpu7aJZuXv',
'xweND3F4J/Zh0IzTv/ZiruFkaDLpGQARAQABwsFfBBgBCAATBQJaHcqmCRAN',
'sV5q3aKR3wIbDAAAHtIP/jCiPYY5QxDsE1l3VNflwK56Wf7yqf1wSKBU7/BA',
'TPCnHfDIeto9WbszPwl9zOuns0JcNF4S16BdpnUvOCEEh8KpubgzibXOh4vj',
'xOCoQdxOLBVNCfJOgMx6akEMelnsqDR08bu6JmKU09CmctJpYINUH7WfmlRP',
'X2Z8U0kFs63VEeTuZey3/02ej0V1rwx1Qsk8f32+vu9NgQxuKM+xeMRie5HI',
'wxxTMuyKcCcdtTEBATATE2okpW48yqRJnU8CG8q0i6Ei/oPOYIEq66wlVaSC',
'F98a825RbEqpDnq7I6o5BloUHRjUiBgNZnD8WOnLZ4fjAXQbZNQeaFTCpWfj',
'iN2VWYVIhk2qiAizyQG9iKs6D5yJjCoCkTG8StpSmEb9w0lhroya/WG12oWA',
'k5I/IYVjUIYVYf93+zJt63E3J06k+JGNsN6WywZw9a1Wj9aXIoue9hCy8Wvi',
'boDpEQfH1fccILVaVW+5gX0zf94VFD9xLqpQ0elHUzyWCTSZDMPEAC1DInwB',
'Y4ZDg5z8VVUqPm0pp4KUo/dQkoqHyC8BFqZyK5CeMw7WFcEqP3TmrR0r6TXF',
'hymzYzRMv1HzpsrNDHsV3mlR8V86FqJjoKqq4vUdrxWfgYlbJYgXDWXh5XMw',
'hqlPZ9ZoPbXL7ud4G/pC/hLCzQaqBy7c7YBrkqrHF0DB',
'=kyR/',
'-----END PGP PUBLIC KEY BLOCK-----',
'',
'',
].join('\n');
	nmstuff00.pword = 'password';
	
	var nmstuff01 = new Object();
	nmstuff01.privatekey = [
'-----BEGIN PGP PRIVATE KEY BLOCK-----',
'Version: OpenPGP.js v2.5.10',
'Comment: https://openpgpjs.org',
'',
'xcaGBFodzAwBEACjSlo3thwkeJDpHjhSlgpnafm0ft7Mu8XTBDd5ETqRCqoo',
'ryRLLxqGLclTDsjdGclRs96fH23BkDhRN+vMnKeVWRSR/7HYHicfUngOdgBn',
'LhrgdA+USKlbnv7lKmfJvTWPi+y1gZB3t3xyDkzCVI6PySjXVacYsHAKq8hN',
'jrQ60UdKJ437m0QsyZIOVqvB3iualCnZ//wFR6AiCQd0PhNjPil6EwaBxXea',
'l2Y5HaX4XN1RGcdiHD1ViVGvck//QaLrz3kopUsS5C8cUqgtt7CS/txeH225',
'4fqllK94m2UQSmGjtNHoL1BbMGc+CpyHSemeBr10YY6ggAzHoHOSfMLLIBHU',
'nPpm4xYPqkrrVoUNCRjIVgXzF03eS+tHZ1dmHw2V/+h9zZd5Dfhc7DluqL+w',
'BZZp7MwYsPF+JPB2TWCQFVjRb1m32Et6iMHbhWZ0iHsQg7BRDeHixbGw+l5v',
'4t8Po8XRl1ByczcT1CxCJYp9C+Fl5GB29Dq4+fRcpS5UM0dqX/MSc8Y+I534',
'MMv5e1hRzs9IyZ5gh7rXriL7MSPOsmWUjzkZzS/sHv3L+Ib7SRkHCfpXhCR7',
'z9DPBPw12WQR4jFANdsD5gk5XRRArG37HPpDUyLP7/WC9w0C+3pcUWEmJ8WZ',
'qYh/FVlMSxlJ+YLMhcYhMLTftQJngVe3hpNuWwARAQAB/gkDCOsjRKjhEiFA',
'YOlSqzqf9HFfvEdxcXeEPyY4Zd4sSbwkZb6OWss+1yLNbt2m8j3fDbo83EK8',
'ycZdx9DnpwFIDpkt3/024AvoQ2wrShc8x5jsjJGiXpER/dY+aedz4Rk4n8BU',
'q+3gLLhL6oF3cdkVND3Me8GZlP7A+eLl4ed3gAnuZraaE2vTIUnSwPKlFQ7G',
'SGmT7D41wZOUpfk7KzsfGJx5alxhTyvRKtRyrGtyQnG6miQiAsc9fOSTJPs5',
'0qEskeROZfIvQy0aruocJQgCboF99NW0QmvBuWekaA2n2KeaxP50ttZQv9qU',
'oLwexuD3pjrQ4Jhjh+R1Du/mfz2GGmsQTEnv6a9wmzDe8GWg9bJWtpL9kqP/',
'PTi4bz5uxU5LdxqkYBV7mrqkg4g0RCyrRe2I0hU5j5F1AXuTdqXnTHiER6ZU',
'PVdtf+9Y6cr26lHxk5CYXiTACOmNhc71HRKekgsWvbYUGT3wf4/bqo4INKAW',
'Sp5I54DzI9P5sOB7/x/MrnEu20SlI5Zl2d9vegCjAUMfMdWLsVEARpTSOouT',
'BrgW7CUf6/ES2qteloqiSQifw+pCPl3MgkLPlar8w4vwU+Gikm+gHYuWjsTS',
'W/OTNMadBdISPHfWD15TJ166B/3LdeEkXIvYoC1U0PqdcoKEuRvsM+y0RiXy',
'pilTiuIwH49j66RklT/ntuNfiwO6RoxUiehDZdMAKE9RSUnFsXt6svOSwwV4',
'nQyiDWRWTDgBOykknvxYPpcrSLTYOiwVE7842DoB9i36KOkz4vX5tu7PBQLN',
'ynoSh8gJLDbvBkEMBcdhaihbP+J5uBzXgTUDPSh3qV5ou8LVAeO00t1m11Md',
'2UVg4RvP2WzAH6ck4nZiVsxv9E8mfT805t3bYausHKP6gW8mlH0Laz7TOcvc',
'dHItAlSKqvRAjm8SrRARm517UyiFOK+UCGQmyTHpNCqG4PblfO795y7tg3bH',
'2aMcm7Amf/3tYqLJNjL0TtzAmvywLtIXkS9q4sjFVbTWhdlIveXtuM0Geu+0',
'BrbeDqcGipdRznyIW/xaCXt2SwnWehlLO9C3/6bK+U1kVSCQvH3yFIxVNOgt',
'HIgMQzUybAgQhglWuFfO+6ceakMCRCGc56OYp/ViXinaX7qmoous6Oykz5MF',
'+cpM5Ge8osnw2ztGOfIYK15AcwK+SBHIw4Hy3thT2WlwJ+jB2acybCK6VZiD',
'+ZzFo02oBjqAyYvSlf/0UPS8JrqcAdvGjwLmzK0HxhPeOG7VUZR8Fl7ZAVyr',
'+j3Wwh5f1VmG9hn4/cfFlIGpTlYb7eNyfj9+oAwOAfvb+A27clwMXaGuQaOl',
'JoJbZwF6VDTPQ7o2Htet9A3ZNZnnobfa4k5SKDrTw54Tkd8xgW136/OMByCx',
'VIzby3s+DjeBCGznHisk4wd1kcpaCR2TE86fnPEAtqsSQoWxeiKUMvycKHSQ',
'B7uxr1HysVflnlgMRFr300JxBdm0NwJ2X4nxyG3I4/p6Rxf/RPNoKqkq4cs8',
'Qq6jo+spTdkE1WFkszCk391hGZBviJL30Z8EeNx/U1CXTb/S9nPm2lawURf4',
'iySuUe9oqN5MTXy5F6scefDJoxJ3k6yRkz/CvroI1Mhd7FAs+6yh1XmAkKS3',
'HwNeRtHfD6Gh719oHwl8m5Gn39lqua9QtcIt1fB4mM0TvYJ3MIihgnYQD0rd',
'T0vOM/On7lRK3C1leCt7Ow1iahF2mVt4mBoAfIOLMf/FoLVenx0p9JCANTS/',
'5uoM/oq5xTMwfqiE2G08Lkk+9vvNFTxzb21lb25lQGV4YW1wbGUuY29tPsLB',
'dQQQAQgAKQUCWh3MIgYLCQcIAwIJEBq5RT+LZ6PBBBUICgIDFgIBAhkBAhsD',
'Ah4BAABSQA/9FXpxiSd2xejz0BcBL4iVE9XYqVRmOZ8AicsnbTxud8/j2yir',
'p34Ygc68lipvttZsLHODA/yBXeRi2kAsA3xSbHsTCssV0CYJDuSD7gFEWZnh',
'NzLWQ3IiLFeC81TvyfjXYO4F3yXmJ6L36WBPhZoKj6mD0LePhvEDqdoJQ36k',
'HqG2FMDM+l7obtYFxBdw3BL5C7J6KlwtHnEZF+CE7Ncw4XgIYvibGCp1w41l',
'KCXUx38WGPWO4SkMz7KF48cXBbw60VXn+EMutuxb1auP+0uRMdAH0LrX5iA4',
'EmpzVY1lXtH9kut3iNPVpoBJyBPkjcSCg+RTRjCMvANa5Jrj9yUaeq310qpW',
'+ILR1fVzB3XwvwhiBi1MwkOYTgk07Rr3FxCGzOqXzrBnqCfMcyaMZV9nJHQT',
'FC/CFgdlePqLtQU8uhhR6mgBxpggFDWNo1gUf+EBQBaNWD0HFHhW31g68qZU',
'Nz0z6ZGVf2HpzFCyjsUtM+LqBFJBz6fktKAh1wiwF85BeLYkrexv2CWQahRp',
'QQPJDkTROdBtWKHuim4HhFgQQiuzUm8Q9bINGHcmZCzhUDq9Wg1OLIinIeG5',
'2CYFfhsKxsFZESdJyKOlDT+7UBiI17qzjX/tXkumiZeBg+xy4q8gJbIVvHqR',
'7sQcJsPBZ4Bca0JDBkF6sckSZV5fhmVE5G/HxoYEWh3MDAEQAKPfMz2BEvPZ',
'Q9VtED/LF+P6h752L9T2iZXId9KqTAOh6LAT9QjhFzOYFH3fNMM0sKI/lmA+',
'VTlZ5jPzSQNkDUs4v5AF6rcpFT+cJ4okJ7PKOdWrfzYp6Oea8f22erEhsu8d',
'eSKI4EY5iPQjq2YrvC9TGgDwe0yreKbuqzw+/ksi7MEvwroakutGOoW1Zr3g',
'gLXVw+tkuMK68UQ4VDGJmFPu7APfHVhKNPN0D39lAmpey6Zb4mjDy6UhujDm',
'h4p8sQhJWRqr959Y+wA/M1c1cNgxUNFtp81cdOxbHYJ9PUsCTzjvCapTsTJU',
'ciQ+7++AjmhmXyisCjyYEV8q0woqsED6QVfOTseexLQr1QaHJ95AVOG3uPN6',
'WctMH5KKeu3iuQxXJjr+GSIVydTqaKdnH12bUY8W+eQXajNZAcNN9Td1CG7q',
'C6k0U2w8zmlalHro2rswFHBZhEYhN0etNaZuq5tC6N+PunzWzAYhWqFwBMnm',
'lev8nYGDhX3xjIF9SlP8RDnpCVWokWV/f2fmScntdGpWVu5ta8mgwiarb6Eu',
'IlnDt94PGKqaZbTDiWjyxayRaO7zxpPvUCH82pJ9rsePflXegxS+mD1bQDUt',
'HlNTe5yoS+3+eyCICiSe7YiFUUhzyyQd/8WCXEH5iN5jg6cBxbX56xVjghS4',
'dFtpBZzaR1sDABEBAAH+CQMIO8nGhhqyiXFgKkrMzj7vdugFswU1H0vJm43n',
'VTOPdGLK6FkQiIXDIiPNdZ8hXTR6HnDq55kRzbfw+cRjKBGN0IN5ORk4p/UG',
'9Gm5k4+B7cRoXgLCc/AUpTZaRrzH6jcNzOZVvUrfsrNBCr+kKJV+D86jbN89',
'6cRQZXkN/kvVfusVoJvYmeiDdMAQJlOZphW0lDYTcXzzJsZWGcAR8vwCTOJU',
'KfdNcBxqyOX6YtUdXGYItP2jWo5ds6pJu8tO0PRtia+rJAf7Qjy+Zd9a2vB2',
'cCF+nx4DBH4y3tARUeIvt8U737w+2EWzDQ92HpTTtx6x+9uIF/9ZbNAxTeA+',
'j6dNjUVGpKCUa9lznvMrUNWnPbcvMgh9rbXNbY7lNIQbnu3qqDPxG8kafka1',
'mf7RcClVfqs3RFYHmovJdd1zxpW6TwEjOafmz9rZTIuILJr9Gu7STi9xZ6PZ',
'LYU+Bz/t5f1JTH6jUjUryWB4/GuS7YZvOUVhNkrBhm4eiT1BI+tXjb0bM1qB',
'SmDfQv9/eXYgJTE1vV7q2KFslZYTU8rF9TO3N+ysmB0kYFxCIxQ4w6ByRtwV',
'TuM1T8WH/RqtaDKX0RaCTPWG/G/iRmNVl6LYb/AEn/OY0QWbhxwqmpm0Xj3X',
'4Gk5iT1W4xDwe5ZOg6dXnP0w0rXnRxJdKQy2UzYujkyloJytNX7cZyhJdzKr',
'gmK0NqQdmYzaiDsd71eH8hxjO9pp6ptlqovo6r70KldXd6te1CZfm7MjaMdG',
'lSDRiEfYfu1+cT4hgUf8SnEQkdXH5g68mxajsiIAEcE4Uk6yPcH6y8J/j8Nu',
'yjkSZaeFYP7BI8kE9lfFctF2GKXXqpQzVec+15jDpsPaEzq8YvJnjACb2ugj',
'dXPbg0gFRH7YXk1HxGM11kms1gjR7832nEE5HnprW9rUiX1Za4hvaARYRDPc',
'XbBujgmwwKHgDFAGdEUQVRoMU/cHHLD8YPrMWQEF8a1np1FUqNPP9Q1obJE1',
'5nq+Vav3esJed5f2xxTAttmAgIEvtN4OgwqTxxwaLUY5owl+ej5mFm3WiouQ',
'tjQ3CMMDUqK0G6/SgOQCkOQj9l3bFhbll/IpNzvZd5qyen6pQ5GOopPJmz0z',
'5lb0xcSpNE8ooDwaGo4rukjybWpZgsBmTXdYoy1lcdz2ME48ICpY+mHTTEbK',
'NNEMf5ufH/+QgBUr1H88dREKLcTEWbcdvT3eHcXUNCOUoH0pgWSPA9eI48eT',
'G8QTo0mz4QzYdR3FeBktFIEHH24KmRDnFG9MBdiXfnC50p9wfr6r+AmOxEzq',
'vgtNiA9ycbqmxvx23L6cDl2hjmuf4G22Mbhwku9MCNOmJp2gruG2/P4QR81N',
'uebPLSE16VaguxMHGrCPym/lcmAA+7ES5ScJqItqyEojRXI8SnKNoZj/Eg7z',
'D90A7mP3E5ruBzezEA5WpGk6RiXQDP+l4G1MfFTWO/Iv8G0Nvss5ugEmXljy',
'29l3Q9x8ZFco+1kLEK0o2/CLdiKmU0LdRGk2QkNPZndlSN3lqppPQmJeSvyK',
'dJJ4uzi9SoRNuscMwnbdOtB9VEZFIvSnFZI42C7OKZBisRLbjIPvg2cU00kG',
'6U1ASwm2yYjtWk+lRE2YjYEo10Kj+NC0IQYodw1QspotGsuXcpJvXTkjpIgj',
'fn+6JayoFp/iAORftXSQ1OrlpHnVphqDD60NR4WO2DKqMjZP8HNEDxmzkePv',
'saseEAJBEYxLniorpi1Evo+RY7VfcrpUC5SfWzGY64Jlit0librm0smNkATT',
'38LBXwQYAQgAEwUCWh3MKQkQGrlFP4tno8ECGwwAABh3EACKrnV1uUnM1LSa',
'BhNpf69ieRFZOafamcjsRZNRoQnQxPLSC+LatlOzr+9m+p6AGRa7v8ay0lls',
'nXxeDiz8TbEBOD5XL02Mvj6ThxI3e3M/kSa1UCxlaRk7K9y6GheBC3P0y6ST',
'eHtLn1Cw7DgC4Hh3+KszmjQyQJZdzwS40y34XIk6asAUC2IPw5el2o1HkIwU',
'hc9it2jGdQ1EmvcJJEqOfefuCMjDy66V6ynwYhYqWI435qJ1+Y3ZdGhjFzs1',
'5oJOxo0eDjIhGpsokebhHEwXrzq8zEsI5rU4ZWHZzrWpzpPRxvnPzhnXYt+S',
'FgncsQklPlyQZ8phuJWNgSHVcuDNMXwqPmQ0hzvTJrd7YOE0qF2w97GIbwRj',
'hOPCRaF70sX61Dd70lDiOII+esvOyEb/gL9rwMOZlSeLCmeT++HRavN/CgGS',
'I8L8Lyw9buNT7Ui0p8PntoipZ6roYFXm+jDeFj9GTisOOJTTdPWmMLSOv2j8',
'CQF5pMJSIECTNcaMfegrfaJCtvABWg+iKUkJQzHwC7bTpPurJYELUlh4CF45',
't8pHNicspYr9g3ujTWRBJUgUwpd//TZ6h/lh5CFkHc5JcV0STqE2/XN7ivDy',
'pj1gD50Ygy931A+Ml7YlRMfsz8ArBFPpdOdzK7ynB+nk/AHNU/8UlcrePumd',
'7twQp7iL4g==',
'=ftQg',
'-----END PGP PRIVATE KEY BLOCK-----',
'',
].join('\n');
	nmstuff01.publickey = [
'-----BEGIN PGP PUBLIC KEY BLOCK-----',
'Version: OpenPGP.js v2.5.10',
'Comment: https://openpgpjs.org',
'',
'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',
'=JLJi',
'-----END PGP PUBLIC KEY BLOCK-----',
'',
'',
].join('\n');
	nmstuff01.pword = 'password';


var includeList = new Array();

include("js/Encryption.js");

////////////////////////////////////////////
//////////////Include Utility///////////////
////////////////////////////////////////////

function include(file)
{
	for(var i = 0; i < includeList.length; i++)
	{
		if(includeList[i] == file)
			return; //File is already included, escape
	}
	includeList.push(file);
	
	var tag = document.createElement("script");
	tag.src = file;
	document.head.appendChild(tag);
	
	//alert(file);
}


function setup_PGP0()
{
	messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
		funcdone  = true;
		messageBox.value = "openpgp loaded";
	});
}

setup_PGP0();

/*
function manencrypt() 
{
	var tmessage;
	var tmss00;
	
	tmessage = "Hello world.";
	
	Encryption.encryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gemessage = result;
	});
}
*/

function manencrypt() 
{
	var tmessage;
	var trecipient;
	var tmss00;
	var tprivkeyobj00;
	
	tmessage = "Hello world."+gdmessage;
	trecipient = "someone@example.com";
	tprivkeyobj00 = gprivkeyobj01;

	Encryption.encryptMessage (tmessage, tprivkeyobj00, trecipient)
	.then(function(result) {
		gemessage = result;
	});
	
	/*
	//(inp_message, inp_privkobj, inp_recipient)
	Encryption.encryptMessage (tmessage, gprivkeyobj, trecipient)
	.then(function(result) {
		gemessage = result;
	});
	*/
	/*Encryption.encryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gemessage = result;
	});*/
}

function mandecrypt() 
{
	var tmessage;
	var temail;
	var tprivkeyobj00;
	
	tmessage = "aaa\n";
	
	tmessage += gemessage;
	tmessage += "bbb";
	tprivkeyobj00 = gprivkeyobj00;
	temail = "someone@example.com";
	
	Encryption.decryptMessage (tmessage, tprivkeyobj00, temail)
	.then(function(result) {
		gdmessage = result;
	});
	
	/*
	Encryption.decryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gdmessage = result;
	});
	*/
	/*
	//This works
	Encryption.decryptm (gprivkeyobj00, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gdmessage = result;
	});
	*/
	/*
	//This works too
	Encryption.decryptm (gprivkeyobj00, nmstuff00.publickey, tmessage)
	.then(function(result) {
		gdmessage = result;
	});
	*/
	
	/*
	//(inp_message, inp_privkobj, inp_email)
	//(tmessage, tprivkeyobj00, temail)
	//This is working
	Encryption.decryptMessage (tmessage, tprivkeyobj00, temail)
	.then(function(result) {
		gdmessage = result;
	});
	*/
	
}

function testKeyGen() 
{
	var tpword00;
	var temail00;
	var tkeyobj;
	tpword00 = "password";
	temail00 = "someone@example.com";
	
	gpword = tpword00;
	
	messageBox.value = "generating keys...";
	
	Encryption.generateKeypair (temail00, tpword00)
	.then(function(result) {
	
		messageBox.value = "keys generated";
		gkeyobj = result;
		
		messageBox.value = "decrypting key...";
		gprivkeyobj = Encryption.decryptPrivateKey (gkeyobj.privatekey, gpword);
		messageBox.value = "key decrypted";
		/*
		messageBox.value = "testing encryption...";
		manencrypt();
		*/
			
			//man decrypt is not being called in this function not worrying about it due to time contraints
			//it does work when manually called
			//mandecrypt();
		
	});
	
}

//currently defunct
function maniprkey()
{	

//messageBox.value = "not in use";
//messageBox.value = gkeyobj.privatekey;
messageBox.value = gemessage;

}

function manipbkey()
{
	//messageBox.value = "not in use";
	//messageBox.value = gkeyobj.publickey;
	
	//string00.length
	//-----BEGIN PGP PRIVATE KEY BLOCK-----
	//-----END PGP PRIVATE KEY BLOCK-----
	//-----BEGIN PGP PUBLIC KEY BLOCK-----
	//-----END PGP PUBLIC KEY BLOCK-----
	//-----BEGIN PGP MESSAGE-----
	//-----END PGP MESSAGE-----
	//also end has an additional \n
	var inp_str, part0, part1, part2, temp;
	var dumb00, dumb01;
	var index0, index1;
	var length0, length1;
	var delim0, delim1;
	
	delim0 = '-----BEGIN PGP PRIVATE KEY BLOCK-----';
	delim1 = '-----END PGP PRIVATE KEY BLOCK-----';
	//delim0 = '-----BEGIN PGP PUBLIC KEY BLOCK-----';
	//delim1 = '-----END PGP PUBLIC KEY BLOCK-----';
	
	dumb00 = "aaa";
	dumb01 = "bbb";
	inp_str = dumb00+nmstuff00.privatekey+dumb01;
	
	index0 = inp_str.indexOf(delim0);
	
	part0 = inp_str.substring(0, index0);
	temp = inp_str.substring(index0, inp_str.length);
	
	index1 = temp.indexOf(delim1) + delim1.length;
	
	part1 = temp.substring(0, index1);
	part2 = temp.substring(index1, temp.length);
	
	//NOTE: technically there is white space at end of key
		//\n in this case gets to be part of part2
}

//get the private key object
function manipw()
{
	if (true)
	{
		funcdone = false;
	
		//gprivkeyobj = Encryption.decryptPrivateKey (gkeyobj.privatekey, gpword);
		gprivkeyobj00 = Encryption.decryptPrivateKey (nmstuff00.privatekey, nmstuff00.pword);
		gprivkeyobj01 = Encryption.decryptPrivateKey (nmstuff01.privatekey, nmstuff01.pword);
		//gprivkeyobj = Encryption.decryptPrivateKey ();
		//gprivkeyobj00 = Encryption.decryptPrivateKey ("a", "b");
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
}

document.getElementById('encrypt').onclick = manencrypt;
document.getElementById('decrypt').onclick = mandecrypt;
document.getElementById('genkeys').onclick = testKeyGen;
document.getElementById('inpprivkey').onclick = maniprkey;
document.getElementById('inppubkey').onclick = manipbkey;
document.getElementById('inppword').onclick = manipw;