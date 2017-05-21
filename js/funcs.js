function validate_isRUT(rut)

{

	if (rut.length != 12){

		return false;

	}

	if (!/^([0-9])*$/.test(rut)){

               return false;

  	}

	var dc = rut.substr(11, 1);

	var rut = rut.substr(0, 11);

	var total = 0;

	var factor = 2;

 

	for (i = 10; i >= 0; i--) {

		total += (factor * rut.substr(i, 1));

		factor = (factor == 9)?2:++factor;

	}

 

	var dv = 11 - (total % 11);

 

	if (dv == 11){

		dv = 0;

	}else if(dv == 10){

		dv = 1;

	}

	if(dv == dc){

		return true;

	}

	return false;

}