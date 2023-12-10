const Paciente = () => {

    return(
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">damian</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">10-diciembre-2023</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quo numquam recusandae impedit quibusdam dignissimos ipsam magnam fugiat dicta ad esse! Ad, quidem error fugit animi nobis odit nisi? In?</span>
            </p>
        </div>
    )
}

export default Paciente