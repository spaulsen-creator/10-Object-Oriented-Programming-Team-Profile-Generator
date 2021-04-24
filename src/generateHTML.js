const generateManager = (data) => {
    return `<div class='container'>
       <ul class='ul'><li>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header font:'text-white' style='background:blue'>
            ${data.name}<br>
            <div class='fas fa-mug-hot'>${data.getRole()}</div>
            </div>
        <div class='card-body'>
            <form role='form'>
            <div class='form-group'>
            <p><b>Id:</b>${data.id}</p>
            </div>
            <div class='form-group'>
            <p><b>Email:</b> <a href='mailto:${data.email}'>${data.email}</a></p>
            </div>
            <div class='form-group'>
            <p><b>Office Number:</b> ${data.officeNumber}'>${data.officeNumber}</p>
            </div>
            </form>
        </div>
        </div>
    </div>
    </li>`;
};

const generateEngineer = (data) => {
    return `<div class='container'>
       <ul class='ul'><li>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header font:'text-white' style='background:blue'>
            ${data.name}<br>
            <div class='fas fa-glasses'>${data.getRole()}</div>
            </div>
        <div class='card-body'>
            <form role='form'>
            <div class='form-group'>
            <p><b>Id:</b>${data.id}</p>
            </div>
            <div class='form-group'>
            <p><b>Email:</b> <a href='mailto:${data.email}'>${data.email}</a></p>
            </div>
            <div class='form-group'>
            <p><b>GitHub User Name:</b> <a href='https://github.com/${data.github}'>${data.github}</a></p>
            </div>
            </form>
        </div>
        </div>
    </div>
    </li>`;
};

const generateIntern = (data) => {
    return `<div class='container'>
       <ul class='ul'><li>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header font:'text-white' style='background:blue'>
            ${data.name}<br>
            <div class='fas fa-user-graduate'>${data.getRole()}</div>
            </div>
        <div class='card-body'>
            <form role='form'>
            <div class='form-group'>
            <p><b>Id:</b>${data.id}</p>
            </div>
            <div class='form-group'>
            <p><b>Email:</b> <a href='mailto:${data.email}'>${data.email}</a></p>
            </div>
            <div class='form-group'>
            <p><b>School:</b> ${data.school}'>${data.school}</p>
            </div>
            </form>
        </div>
        </div>
    </div>
    </li>`;
};



module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-compatible" content="ie-edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
</html>
`;
}${manager.getName()}