function HandleMessage(event) {
    console.log(event.data);
    var data = JSON.parse(event.data);
    console.log(data)
    console.log(data[0])
    console.log(data[0] == 'ReadDirectory')
    if (data[0] == 'ReadDirectory') {
        HandlePepperMountMessage(data);
    }
}

function Start() {
    document.getElementById("Selection").style.display = "none";
}

let help = "NaCl disabled: Native Client is not enabled.<br>" + "Please go to <em id='link' href='chrome://flags#enable-nacl' target='_blank'>chrome://flags#enable-nacl</em> and enable the Native Client plugin.";

function checkBrowser() {
    var isValidBrowser = false;
    var browserSupportStatus = 0;
    var checker = new browser_version.BrowserChecker(15, // Minumum Chrome version.
        navigator["appVersion"],
        navigator["plugins"]);
    checker.checkBrowser();
    isValidBrowser = checker.getIsValidBrowser();
    browserSupportStatus = checker.getBrowserSupportStatus();

    switch (browserSupportStatus) {
        case browser_version.BrowserChecker.StatusValues.NACL_ENABLED:
            console.log('Native Client plugin enabled.');
            document.getElementById("Selection").style.display = "none";
            break;
        case browser_version.BrowserChecker.StatusValues.UNKNOWN_BROWSER:
            console.log('UNKNOWN BROWSER');
            break;
        case browser_version.BrowserChecker.StatusValues.CHROME_VERSION_TOO_OLD:
            console.log('Chrome too old: You must use Chrome version 15 or later.');
            console.log('NEED CHROME 15 OR LATER');
            break;
        case browser_version.BrowserChecker.StatusValues.NACL_NOT_ENABLED:
            console.log(help);
            document.getElementById('checker').innerHTML = "" + help + "";
            let link = document.getElementById('link');
            link.onclick = function () {
                let link2 = 'chrome://flags#enable-nacl';
                window.open(link2, "_blank");
            }
            console.log('NativeClient NOT ENABLED');
            break;
        case browser_version.BrowserChecker.StatusValues.NOT_USING_SERVER:
            console.log(
                'file: URL detected, please use a web server to host Native ' +
                'Client applications.');
            console.log('file:// URLs NOT ALLOWED');
        default:
            console.log('Unknown error: Unable to detect browser and/or ' +
                'Native Client support.');
            console.log('UNKNOWN ERROR');
            break;
    }
    return isValidBrowser && browserSupportStatus == browser_version.BrowserChecker.StatusValues.NACL_ENABLED;
}
checkBrowser();
