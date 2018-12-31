
$(function(){
	
	 $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Insert Data ');
		$('.modal-footer button[type=submit]').html('Insert Data')
         $('#nama').val('');
        $('#nim').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
	});
	


  $('.tampilModalUbah').on('click', function() {
        
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
       
        const id = $(this).data('id');
        
        $('.modal-body form').attr('action', 'http://localhost/belajarmvc/public/mahasiswa/ubahdata');
        $.ajax({
            url: 'http://localhost/belajarmvc/public/mahasiswa/getubah',
            //kiri id kirim kanan isi id
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
				$('#nama').val(data.nama);
                $('#nim').val(data.nim);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);  
                $('#id').val(data.id);

			} 
		});
	});
});