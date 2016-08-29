$(document).ready(function () {
                $('#divId').click(function () {
                    $('#divId').animate({left: '150px', top: '400px'}, 800, function () {
                        $('#divId').animate({left: '300px', top: '200px'}, 800, function () {
                            $('#divId').animate({left: '600px', top: '200px'}, 800, function () {
                                $('#divId').rotate({angle: 0, animateTo: 0}, 800);
                                $('#divId').animate({left: '900px', top: '400px'}, 800, function () {
                                    $('#divId').animate({left: '1000px', top: '400px'}, 800);
                                });
                            });
                        });
                    });
                    $('#divId').rotate({angle: 0, animateTo: 12}, 2000);
                });
            });