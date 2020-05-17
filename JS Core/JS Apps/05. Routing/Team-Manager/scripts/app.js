$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', function() {
            this.loggedIn = !!sessionStorage.getItem('userId');
            this.hasteam = !!sessionStorage.getItem('teamId');
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function() {
                this.partial('./templates/home/home.hbs')
            }
            );
        });

        this.get('#/about', function() {
            this.loggedIn = !!sessionStorage.getItem('userId');
            this.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function() {
                this.partial('./templates/about/about.hbs')
            }
            );
        });

        this.get('#/login', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function() {
                this.partial('./templates/login/loginPage.hbs')
            }
            );
        });

        this.get('#/register', function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function() {
                this.partial('./templates/register/registerPage.hbs')
            }
            );
        });

        this.get('#/logout', function() {
            sessionStorage.clear();
            this.redirect('#/home');
        });

        this.post("#/register", function(context) {
            let that = this;
            let username = context.params.username;
            let password = context.params.password;
            auth.register(username, password)
                .then(function(res) {
                auth.saveSession(res);
                auth.showInfo('Succesfully registered!');
                that.redirect('#/home')
            });
        });

        this.post("#/login", function(context) {
            let that = this;
            let username = context.params.username;
            let password = context.params.password;
            auth.login(username, password)
                .then(function(res) {
                auth.saveSession(res);
                auth.showInfo('Succesfully logged!');
                that.redirect('#/home');
            });
        });

        this.get('#/catalog', async function() {
            this.loggedIn = !!sessionStorage.getItem('userId');
            this.hasNoTeam = !sessionStorage.getItem('teamId');
            
            this.teams = await teamsService.loadTeams().then(function(res) {
                let allteams = [];
                for(i=0; i<5; i++) {
                    allteams.push(res[i]);
                }
                return allteams;
                
            });
            
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                team: './templates/catalog/team.hbs'
            }).then(function() {
                this.partial('./templates/catalog/teamCatalog.hbs')
            });
        });

        this.get("#/create", function() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function() {
                this.partial('./templates/create/createPage.hbs')
            });
        });

        this.post("#/create", function(ctx) {
            let that = this;
            let teamName = ctx.params.name;
            let teamComment = ctx.params.comment;
            teamsService.createTeam(teamName, teamComment)
                .then(function(res) {
                    auth.showInfo(`Succesfully registered team: ${res.name}`);
                    sessionStorage.setItem('teamId', res._id)
                    that.redirect('#/catalog');
                });
        });

    });

    app.run();
});