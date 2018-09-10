function subst() {
                var vars = {};
                var x = document.location.search.substring(1).split('&amp;');
                for (var i in x) {
                    var z = x[i].split('=', 2);
                    vars[z[0]] = unescape(z[1]);
                }
                var x=['frompage', 'topage', 'page', 'webpage', 'section', 'subsection', 'subsubsection'];
                for (var i in x) {

                    var y = document.getElementsByClassName(x[i]);
                    for (var j=0; j&lt;y.length; ++j)
                        y[j].textContent = vars[x[i]];
                    }
                var operations = {
                    'not-first-page': function (elt) {
                        elt.style.visibility = (vars.page === vars.frompage) ? "hidden" : "visible";
                    },
                    'not-last-page': function (elt) {
                        elt.style.visibility = (vars.page === vars.topage) ? "hidden" : "visible";
                    },
                    'first-page': function (elt) {
                        elt.style.visibility = (vars.page === vars.frompage) ? "visible" : "hidden";
                    },
                    'last-page': function (elt) {

                        elt.style.visibility = (vars.page === vars.topage) ? "visible" : "hidden";
                    },
                };
                for (var klass in operations) {
                    var y = document.getElementsByClassName(klass);
                    for (var j=0; j&lt;y.length; ++j)
                        operations[klass](y[j]);
                    }
            }