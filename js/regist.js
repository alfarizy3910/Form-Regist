$(document).ready(function () {
    $('#button').click(function () {
        alert(" Nama : " + $("#Nama").val() + '\n'
            + " Alamat: " + $('#Alamat').val() + '\n'
            + "  NoHp : " + $('#NoHp').val() + '\n'
            + " NamaOrangtua : " + $('#NamaOrangtua').val() + '\n'
            + " AsalSekolah : " + $('#AsalSekolah').val() + '\n'
            + " Jenis_Kelamin: " + $('input[name=Jenis_Kelamin]:checked').val());
    });
});
