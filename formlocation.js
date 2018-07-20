 $("#route_name").autocomplete({
        minLength: 2,
        source: function( request, response ) {
            $.ajax({
                url: "http://myproject/app/routes/all/",
                dataType: "json",
                data: { searchText: request.term, maxResults: 10 },
                success: function( data ) {
                    response( $.map( data, function( item ) {
                        return {    label: item.route_name+', '+item.route_grade+', '+item.area_name, 
                                    value: item.route_name, //value: item.route_name+', '+item.route_grade+', '+item.area_name, 
                                    id: item.route_id,
                                    route_grade: item.route_grade,
                                    route_type: item.route_type,
                                    area_name: item.area_name,
                                    sector_name: item.sector_name,
                                    country_name: item.country_name
                                    }   
                    }));
                }
            });
        },
        select: function (event, ui) {
            $('#route_name').val(ui.item.value);
            $('#grade').val(ui.item.route_grade);
            $('#area_name').val(ui.item.area_name);
            $('#sector_name').val(ui.item.sector_name);
            $('#country_name').val(ui.item.country_name);
            $('#route_id').val(ui.item.id);

            var $radios = $('input:radio[name=route_type]');
            if($radios.is(':checked') === false  && ui.item.route_type == 'route') {
                $radios.filter('[value=route]').prop('checked', true);
            }
            if($radios.is(':checked') === false  && ui.item.route_type == 'boulder') {
                $radios.filter('[value=boulder]').prop('checked', true);
            }
            return false;
        },
    });
