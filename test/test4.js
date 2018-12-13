var request = require("request");

var options = { method: 'POST',
  url: 'http://www.example.org',
  headers: 
   { 'Content-Type': 'text/xml' },
  body: '<?xml version="1.0"?>\n<soap:Envelope\nxmlns:soap="https://clicktime.symantec.com/a/1/z01rQVw1k7z6AZ62MUM5bLLY-WV5XKOveu12FXsll20=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-envelope%2F%2522\nsoap:encodingStyle="https://clicktime.symantec.com/a/1/kEZdM2pwneKhTJrMtcgt_DbtC56XeKo9h4UU6dfolYM=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-encoding%2522>\n\n<soap:Body xmlns:m="https://clicktime.symantec.com/a/1/XrVPX629IIGVuLL1AxXjHUI1lGng2ldt_acEQtXam4U=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.example.org%2Fstock%2522>\n  <m:GetStockPrice>\n    <m:StockName>IBM</m:StockName>\n  </m:GetStockPrice>\n</soap:Body>\n</soap:Envelope>' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
