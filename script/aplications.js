function updateResults() {
    var query = $.trim($('.search-query').val()).toLowerCase();
    $('div.staff-container .bold').each(function(){
        var $this = $(this);
        if($this.text().toLowerCase().indexOf(query) === -1)
            $this.closest('div.staff-container').fadeOut();
        else $this.closest('div.staff-container').fadeIn();
    });
}

$('.form-search').on('submit',function(){return false;});
$('.form-search .btn').on('click', updateResults);
$('.search-query').on('input', updateResults);