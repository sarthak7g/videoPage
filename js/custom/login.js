//document.getElementsById('preloader').style.display = 'block';


function logincheck(screen, hiveid, priceid) {
    showLoader();

    const url = "https://kong.princetonhive.com/identity/api/User/Login";
    // const url = "http://localhost:56252/api/User/Login";
    const customer = {
        'Email': document.getElementById('loginEmail').value,
        'Password': document.getElementById('password').value,
        'strsession': document.getElementById("strsession").value
    };
    const other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(customer),
        method: "POST",
        mode: "cors",
        credentials: "same-origin"
    };
    fetch(url, other_params)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Login Successfully!") {
                console.log(data.data);
                sessionStorage.setItem("token", data.data.token);
                //debugger;
                //var settings = {
                //    "url": "https://kong.princetonhive.com/identity/api/User/getdata",
                //    "method": "GET",
                //    "timeout": 0,
                //    "headers": {
                //        "Authorization": "Bearer " + data.data
                //    },
                //};

                //$.ajax(settings).done(function (response) {
                //    alert("aa");
                //    console.log(response);
                //});

                if (screen == 'buynow') {
                    //getToken(data.data.email);
                    //const url = "https://kong.princetonhive.com/identity/api/User/GenerateTHToken?email=" + data.data.email;
                    //$.get(url, function (token) {

                    //    if (!$('#materialChecked1').prop('checked') && !$('#materialChecked3').prop('checked') && hiveid == "600462") {
                    //        const location = "https://princetonhive.thinkific.com/api/sso/v2/sso/jwt?jwt=" + token + "&return_to=https://hives.princetonhive.com/enroll/" + 969435 + "?price_id=" + 1065849;
                    //        window.location.href = location;
                    //    } else {
                    //        const location = "https://princetonhive.thinkific.com/api/sso/v2/sso/jwt?jwt=" + token + "&return_to=https://hives.princetonhive.com/enroll/" + String(hiveid) + "?price_id=" + String(priceid);
                    //        window.location.href = location;   

                    //    }
                    //});
                    courseid = $('#IDCourse').val();
                    if (COUNTRY == 'India') {
                        if (!$('#materialChecked1').prop('checked') && !$('#materialChecked3').prop('checked') && hiveid == "600462") {
                            const location = "CP?hive=" + data.data.token + ",product_id =969435,course_id=" + courseid;
                            window.location.href = location;
                        } else {
                            const location = "CP?hive=" + data.data.token + ",product_id =" + hiveid + ",course_id=" + courseid;
                            //  const location = "PaytmCheckout?product_id=" + hiveid + "&course_id=" + courseid;
                            window.location.href = location;
                        }
                    } else {

                        if (!$('#materialChecked1').prop('checked') && !$('#materialChecked3').prop('checked') && hiveid == "600462") {
                            const location = "CP?hive=" + data.data.token + ",stipe=969435,price_id=" + 1065849;
                            //  const location = "https://princetonhive.thinkific.com/api/sso/v2/sso/jwt?jwt=" + data.data.token + "&return_to=https://hives.princetonhive.com/enroll/" + 969435 + "?price_id=" + 1065849;
                            window.location.href = location;
                        } else {
                            const location = "CP?hive=" + data.data.token + "," + String(hiveid) + ",price_id=" + String(priceid);
                            //  const location = "https://princetonhive.thinkific.com/api/sso/v2/sso/jwt?jwt=" + data.data.token + "&return_to=https://hives.princetonhive.com/enroll/" + String(hiveid) + "?price_id=" + String(priceid);
                            window.location.href = location;
                        }
                    }
                }
                else if (screen == 'wishlist') {
                    //  alert(hiveid, data.data.email);
                    Addwishlist(hiveid, data.data.email)
                    window.location.href = "Index?jwttoken=" + data.data.token;
                }
                else if (screen == 'register') {
                    const predata = {
                        'email': data.data.email,
                        'hiveid': hiveid
                    }
                    var settings = {
                        "url": "https://kong.princetonhive.com/identity/api/User/Preregistration",
                        "method": "POST",
                        "timeout": 0,
                        "headers": {
                            "content-type": "application/json; charset=utf-8"
                        },
                        "data": JSON.stringify(predata),
                    };

                    $.ajax(settings).done(function (response) {
                        if (response.message == "Pre-Register saved successfully") {
                            swal("Registered!", "Thanks for pre-registering! Please check your inbox for a surprise.", "success");
                            //window.location.href = window.location.href + "?jwttoken=" + data.data.token;  
                            window.location.href = "index" + "?jwttoken=" + data.data.token;
                            hideLoader();
                        } else if (response.message == "Pre-Register already exist") {
                            swal("Registered!", "You are already pre-registered for this course.", "warning");
                            window.location.href = "index" + "?jwttoken=" + data.data.token;
                            hideLoader();

                        } else {
                            swal("Failed!", "Pre-registration failed. Please try again.", "error");
                            hideLoader();
                        }
                    });
                    $.ajax(settings).fail(function (response) {
                        swal("Failed!", "Pre-registration failed. Please try again.", "error");
                        //window.location.href = window.location.href + "?jwttoken=" + data.data.token;  
                        //window.location.href = "index" + "?jwttoken=" + data.data.token;  
                        hideLoader();
                    });



                }
                else if (screen == 'store') {
                    window.location.href = "storebuy?jwttoken=" + data.data.token + "&pid=" + priceid;
                }
                else {
                    window.location.href = "Bee_studio?jwttoken=" + data.data.token;
                }
            }
            else {
                alert(data.message);
                hideLoader();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            hideLoader();
        });

    return false;
}

function setCookie(cname, cvalue) {
    //debugger;
    var d = new Date();
    d.setTime(d.getTime() + (30 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//function SocialSignupSubmit(firstname, lastname, email, cityid, stateid, countrycode, city) {
//    console.log(firstname, lastname, email, cityid, stateid, countrycode, city);
//    const customer = {
//        'firstName': firstname,
//        'lastName': lastname,
//        // 'regType': document.getElementById('lastName').value,
//        'regType': "L",
//        'password': "aadasa1@a",
//        'email': email,
//        'cityid': cityid,
//        'stateid': stateid,
//        'countrycode': countrycode,
//        'city': city
//    };
//    var settings = {
//        "url": "https://kong.princetonhive.com/identity/api/User/SocialAddUser",
//        "method": "POST",
//        "timeout": 0,
//        "headers": {
//            "content-type": "application/json; charset=UTF-8"
//        },
//        "data": JSON.stringify(customer),
//    };


//    $.ajax(settings).done(function (response) {
//        //   debugger
//        console.log(response);
//        if (response.isSuccess == true) {
//            setCookie("FirstName", response.data.firstName);
//            setCookie("LastName", response.data.lastName);
//            setCookie("Email", response.data.email);
//            setCookie("UUID", response.data.uuid);
//            setCookie("RegType", response.data.regType);
//            //window.location.href = "Bee_Studio";
//        }
//        else {
//            window.lcation.href = "Competition";
//        }
//    });

//    return false;
//}

/// Start Google Social Login
//var googleUser = {};
//var startApp = function () {
//    gapi.load('auth2', function () {
//        // Retrieve the singleton for the GoogleAuth library and set up the client.
//        auth2 = gapi.auth2.init({
//            client_id: '914512825091-d4sc81dlqq6bi9soel386qr55v8qq64i.apps.googleusercontent.com',
//            cookiepolicy: 'single_host_origin',
//            // Request scopes in addition to 'profile' and 'email'
//            //scope: 'additional_scope'
//        });
//        attachSignin(document.getElementById('customBtn'));
//    });
//};

//function attachSignin(element) {
//    auth2.attachClickHandler(element, {},
//        function (googleUser) {
//            var fullname = googleUser.getBasicProfile().getName();
//            var splitname = fullname.split(" ");
//            SocialSignupSubmit(splitname[0], splitname[1], googleUser.getBasicProfile().getEmail(), 4759, 38, "IN", "Ghaziabad");
//        }, function (error) {

//        });
//}
/// End Google Social Login

///Start Facebook Social Login

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().                  // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        testAPI();
    } else {                                 // Not logged into your webpage or we are unable to tell.
        //document.getElementById('status').innerHTML = 'Please log ' +
        //    'into this webpage.';
    }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {   // See the onlogin handler
        statusChangeCallback(response);
    });
}


window.fbAsyncInit = function () {
    FB.init({
        appId: '4009758065761890',
        cookie: true,                     // Enable cookies to allow the server to access the session.
        xfbml: true,                     // Parse social plugins on this webpage.
        version: 'v8.0'           // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);        // Returns the login status.
    });
};

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    FB.api('/me', { locale: 'en_US', fields: 'name, email' },
        function (response) {
            //document.getElementById('status').innerHTML =
            //    'Thanks for logging in, ' + response.name + ',' + response.email + '!';
            alert(response.name);
            var fullname = response.name;
            var splitname = fullname.split(" ");
            var cityid = document.getElementById("CityIdgeo").value;
            var stateid = document.getElementById("Stateidgeo").value;
            var countrycode = document.getElementById("CountryCodegeo").value;
            var cityname = document.getElementById("Citygeo").value;
            SocialSignupSubmit(splitname[0], splitname[1], response.email, parseInt(cityid), parseInt(stateid), countrycode, cityname);
            logout();
        });
}


$(document).ready(function () {
    $.ajax({
        url: "https://kong.princetonhive.com/identity/api/User/GetCountries",
        method: "GET",
        success: function (response) {
            var ddlOption = $("[id*=ddlcountry]");
            ddlOption.empty().append('<option selected="selected" value="0">-- Select Country --</option>');
            $.each(response, function (index, item) {
                ddlOption.append($("<option></option>").val(item.countryCode).html(item.countryName));
            });
        }
    });
});


$(document).ready(function () {

    // select state event //
    $('#ddlcountry').change(function () {
        getStateByCountry($(this).val());
    });

    function getStateByCountry(id) {
        BindStatesignup(id);
    }

});

function BindStatesignup(id) {
    $.ajax({
        url: "https://kong.princetonhive.com/identity/api/User/GetStateByCode?countrycode=" + id,
        method: "GET",
        success: function (response) {
            var ddlOption = $("[id*=ddlstate]");
            ddlOption.empty().append('<option selected="selected" value="0">-- Select State --</option>');
            $.each(response, function (index, item) {
                ddlOption.append($("<option></option>").val(item.stateId).html(item.stateName));
            });
        }
    });
}

//profile 
$(document).ready(function () {

    // select state event //
    $('#Country').change(function () {
        getStateByCountry($(this).val());
    });

    function getStateByCountry(id) {
        BindState(id);
    }

});

function BindState(id) {
    $.ajax({
        url: "https://kong.princetonhive.com/identity/api/User/GetStateByCode?countrycode=" + id,
        method: "GET",
        success: function (response) {
            var ddlOption = $("[id*=State]");
            ddlOption.empty().append('<option selected="selected" value="0">-- Select State --</option>');
            $.each(response, function (index, item) {
                ddlOption.append($("<option></option>").val(item.stateId).html(item.stateName));
            });
        }
    });
}


function logout() {
    FB.logout(function (response) {
        let profile = ""
        document.getElementById("profile").innerHTML = profile;
    });
}

///End Facebook Social Login


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// initialize and setup facebook js sdk
//window.fbAsyncInit = function () {
//    FB.init({
//        appId: '342765556875700',
//        xfbml: true,
//        version: 'v8.0'
//    });

//    FB.getLoginStatus(function (response) {
//        if (response.status === 'connected') {
//            document.getElementById('status').innerHTML = 'We are connected.';
//            //document.getElementById('login').style.visibility = 'hidden';
//        } else if (response.status === 'not_authorized') {
//            document.getElementById('status').innerHTML = 'We are not logged in.'
//        } else {
//            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//        }
//    });
//};

//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) { return; }
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));

//// login with facebook with extra permissions
//function login() {
//    alert("aa");
//    FB.login(function (response) {
//        if (response.status === 'connected') {
//            alert(response.getId)
//            alert(response.getEmail());
//            alert(response.getName());
//            document.getElementById('status').innerHTML = 'We are connected.';
//            alert("connected");
//            //document.getElementById('login').style.visibility = 'hidden';
//        } else if (response.status === 'not_authorized') {
//            document.getElementById('status').innerHTML = 'We are not logged in.'
//        } else {
//            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//            alert();
//        }
//    }, { scope: 'email' });
//}

//// getting basic user info
//function checkLoginState() {
//    FB.getLoginStatus(function (response) {
//        statusChangeCallback(response);
//    });
//}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//function onSignIn(googleUser) {

//    var profile = googleUser.getBasicProfile();
//    console.log('ID: ' + profile.getId());
//    console.log('Name: ' + profile.getName());
//    console.log('Image URL: ' + profile.getImageUrl());
//    console.log('Email: ' + profile.getEmail());
//    //alert(profile.getId());
//    //alert(profile.getName());
//    //alert(profile.getImageUrl());
//    //alert(profile.getEmail());

//    // window.location = '/Admin/VideoU,'
//    SocialSignupSubmit(profile.getName(), profile.getName(), profile.getEmail(), 4759, 38, "IN", "Ghaziabad");
//    // var queryString = "?para1=" + profile.getName() + "&para2=" + profile.getImageUrl() + "&para3=" + profile.getEmail();
//    //  window.location.href = "/Admin/VideoU" + queryString;
//}

//function getdetails(cityname) {
//    $.ajax({
//        type: "GET",
//        url: "https://kong.princetonhive.com/PH/api/Master/Getcitystatecountry?cityname=" + cityname,
//        data: "[]",
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (data) {
//            $('#CityId').val(data[0].cityId);
//            $('#Stateid').val(data[0].stateId);
//            $('#CountryCode').val(data[0].countryCode);
//            $('#CityIdgeo').val(data[0].cityId);
//            $('#Stateidgeo').val(data[0].stateId);
//            $('#CountryCodegeo').val(data[0].countryCode);
//            $('#City').val(data[0].cityName);
//            $('#Citygeo').val(data[0].cityName);
//        }
//    });
//}

function getToken(email) {
    const url = "https://kong.princetonhive.com/identity/api/User/GenerateTHToken?email=" + email;
    $.get(url, function (data) {
        console.log(data)
    });
}

function SignupSubmit() {
    showLoader();
    const url = "https://kong.princetonhive.com/identity/api/User/AddUser";
    const customer = {
        'firstName': document.getElementById('firstName').value,
        'lastName': document.getElementById('lastName').value,
        // 'regType': document.getElementById('lastName').value,
        'regType': "L",
        'email': document.getElementById('newemail').value,
        'password': document.getElementById('newpassword').value,
        'cityname': document.getElementById("cityname").value,
        'countrycode': document.getElementById('ddlcountry').value,
        'stateid': parseInt(document.getElementById('ddlstate').value),
        'city': document.getElementById("cityname").value
    };
    console.log(customer);
    const other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(customer),
        method: "POST",
        mode: "cors",
    };
    fetch(url, other_params)
        .then(response => response.json())
        .then(data => {
            //hideLoader();
            if (data.message == "Confirmation email link sent") {
                swal("Registered!", data.message, "success");
                //  document.getElementsByClassName('successfailure_msg')[0].innerHTML = data.message;
                document.getElementsByClassName('successfailureError_msg')[0].innerHTML = "";
                hideLoader();
            }
            else {
                hideLoader();
                document.getElementsByClassName('successfailure_msg')[0].innerHTML = "";
                // swal("Registered!", data.message, "error");
                document.getElementsByClassName('successfailureError_msg')[0].innerHTML = data.message;
            }
        })
        .catch((error) => {
            hideLoader();
            console.error('Error:', error);
        });
    return false;
}

function SocialSignupSubmit(firstname, lastname, email, cityid, stateid, countrycode, city) {
    // console.log(firstname, lastname, email, cityid, stateid, countrycode, city);
    const customer = {
        'firstName': firstname,
        'lastName': lastname,
        'regType': "L",
        'password': "",
        'email': email,
        'cityid': cityid,
        'stateid': stateid,
        'countrycode': countrycode,
        'city': city
    };
    var settings = {
        "url": "https://kong.princetonhive.com/identity/api/User/SocialAddUser",
        //  "url": "http://localhost:56252/api/User/SocialAddUser",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "content-type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify(customer),
    };

    $.ajax(settings).done(function (response) {
        //  console.log(response);
        //  alert("aa");
        if (response.message == "Confirmation email link sent") {
            window.location.href = "Index?jwttoken=" + response.data.token;
        }
        else {
        }
    });
    return false;
}
//function onSignIn(googleUser) {
//    var profile = googleUser.getBasicProfile();
//    //  debugger;
//    console.log('ID: ' + profile.getId());
//    console.log('Name: ' + profile.getName());
//    console.log('Image URL: ' + profile.getImageUrl());
//    console.log('Email: ' + profile.getEmail());
//    //alert(profile.getId());
//    //alert(profile.getName());
//    //alert(profile.getImageUrl());
//    //alert(profile.getEmail());
//    //$("#hdKey").val(JSON.stringify(profile.getName()));
//    //var t = $("#hdKey").val();
//    // window.location = '/Admin/VideoU,'
//    SocialSignupSubmit(profile.getName(), profile.getName(), profile.getEmail(), 4759, 38, "IN", "Ghaziabad");
//    // var queryString = "?para1=" + profile.getName() + "&para2=" + profile.getImageUrl() + "&para3=" + profile.getEmail();
//    //  window.location.href = "/Admin/VideoU" + queryString;
//}


function EduGetintouch() {
    showLoader();
    const url = "https://kong.princetonhive.com/identity/api/User/GetInTouch";
    const customer = {
        'firstName': document.getElementById('efirstName').value,
        'lastName': document.getElementById('elastName').value,
        'email': document.getElementById('enewemail').value,
        'scoollocation': document.getElementById('eschoollocation').value,
        'schoolname': document.getElementById('eschoolName').value,
        'description': document.getElementById("edesignation").value,
        'schoolsize': document.getElementById('eschool-size').value,
        'scoolurl': document.getElementById('eschoolUrl').value,
        'leadsource': document.getElementById('eleadsource').value
    };
    const other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(customer),
        method: "POST",
        mode: "cors"
    };
    fetch(url, other_params)
        .then(response => response.json())
        .then(data => {
            if (data.message == 'record added') {
                //alert("aa");
                hideLoader();
                swal("Registered!", "Success! We’ll be in touch shortly!", "success");
                //  document.getElementsByClassName('successfailure_msg')[1].innerHTML = "Success! We’ll be in touch shortly!";
                document.getElementsByClassName('successfailureError_msg')[1].innerHTML = "";
            }
            else {
                hideLoader();
                // alert(data.message);
                document.getElementsByClassName('successfailure_msg')[1].innerHTML = "";
                swal("Registered!", "This mail id is already subscribed!", "error");
                // document.getElementsByClassName('successfailureError_msg')[1].innerHTML = "This mail id is already subscribed!";
            }
        })
        .catch((error) => {
            hideLoader();
            console.error('Error:', error);
        });
    return false;
}

function CorpGetintouch() {
    showLoader();
    const url = "https://kong.princetonhive.com/identity/api/User/GetInTouch";
    const customer = {
        'firstName': document.getElementById('cfirstName').value,
        'lastName': document.getElementById('clastName').value,
        'email': document.getElementById('cnewemail').value,
        'scoollocation': document.getElementById('ccompanylocation').value,
        'schoolname': document.getElementById('cCompanyName').value,
        'description': document.getElementById("cdesignation").value,
        'schoolsize': document.getElementById('ccompany-size').value,
        'scoolurl': document.getElementById('ccompanyUrl').value,
        'leadsource': document.getElementById('cleadsource').value
    };
    const other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(customer),
        method: "POST",
        mode: "cors"
    };
    fetch(url, other_params)
        .then(response => response.json())
        .then(data => {
            if (data.message == 'record added') {
                hideLoader();
                swal("Registered!", "Success! We’ll be in touch shortly!", "error");
                //  document.getElementsByClassName('successfailure_msg')[2].innerHTML = "Success! We’ll be in touch shortly!";
                document.getElementsByClassName('successfailureError_msg')[2].innerHTML = "";

            }
            else {
                hideLoader();
                document.getElementsByClassName('successfailure_msg')[2].innerHTML = "";
                swal("Registered!", "This mail id is already subscribed!", "error");
                // document.getElementsByClassName('successfailureError_msg')[2].innerHTML = "This mail id is already subscribed!";
            }
        }, error => error)
        .catch((error) => {
            hideLoader();
            console.error('Error:', error);
        });
    return false;


}


function SubscribeNow() {
    const url = "https://kong.princetonhive.com/identity/api/User/SubscribeNow";
    const customer = {
        'firstName': document.getElementById('semail').value,
        'lastName': document.getElementById('semail').value,
        'email': document.getElementById('semail').value,
        'leadsource': 'Subscribe Now'


    };
    const other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(customer),
        method: "POST",
        mode: "cors"
    };

    fetch(url, other_params)
        .then(response => response.json())
        .then(data => {
            if (data.message == 'record added') {
                //alert("aa");
                document.getElementsByClassName('successfailure_msg')[4].innerHTML = "Thanks for subscribing! You will receive all the updates on priority.";
                document.getElementsByClassName('successfailureError_msg')[4].innerHTML = "";

            }
            else {
                document.getElementsByClassName('successfailure_msg')[4].innerHTML = "";
                document.getElementsByClassName('successfailureError_msg')[4].innerHTML = "This mail id is already subscribed!";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    return false;
}