define(["jquery","backbone","backbone-mongodb"],function(e,t){return e.support.cors=!0,e.ajaxSetup({cache:!1}),_.extend(t.Model.prototype,t.MongoModel.mixin),{baseURL:"https://api.mongolab.com/api/1/databases/social-mobile-app/collections/",addURL:"?apiKey=yGobEjzhT76Pjo9RaOLGfA89xCJXegpl"}});