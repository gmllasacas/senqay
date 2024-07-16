import Project_Left from "./Project_Left";
import Project_Right from "./Project_Right";

export default function Section4() {
    return (
        <>
            <section className="section spdt spdtb" id="proyectos">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">PROYECTOS</div>
                        <h2 className="heading-title size-l">Plataformas personalizadas</h2>
                    </div>
                    <Project_Left
                        subTitle = {'Aplicación web'}
                        title = {'Gestión de Gimnasio'}
                        description = {'Controla los movimientos de inventario diferenciados por sucursal, gestiona los planes y servicios disponibles.'}
                        features = {
                            { 
                                feature1: 'Gestión de inventario, ingresos y ventas por sucursal, integrado con la SUNAT', 
                                feature2: 'Plataforma para clientes con pasarela de pagos', 
                                feature3: 'Consulta, visualiza y exporta reportes según filtros, accesible desde cualquier dispositivo', 
                            }
                        }
                        images = {
                            { 
                                image1: '/assets/images/projects/gym_2.png', 
                                image2: '/assets/images/projects/gym_3.png', 
                                image3: '/assets/images/projects/gym_1.png', 
                            }
                        }
                    />
                    <Project_Right
                        subTitle = {'Aplicación web'}
                        title = {'Software de Inventario'}
                        description = {'Administra tu inventario, incrementa la visibilidad de tus productos.'}
                        features = {
                            { 
                                feature1: 'Gestión de ingresos y ventas, integrado con la SUNAT', 
                                feature2: 'Kardex y Pagos a proveedores ', 
                                feature3: 'Consulta, visualiza y exporta reportes según filtros, accesible desde cualquier dispositivo', 
                            }
                        }
                        images = {
                            { 
                                image1: '/assets/images/projects/inven_1.png', 
                                image2: '/assets/images/projects/inven_2.png',
                                image3: '/assets/images/projects/inven_3.png', 
                            }
                        }
                    />
                    <Project_Left
                        subTitle = {'Aplicación web'}
                        title = {'Administración para una OSE'}
                        description = {'Consulta informacón enviada, gestiona clientes tributarios.'}
                        features = {
                            { 
                                feature1: 'Consulta y emite comprobantes de pago, integrado con la SUNAT', 
                                feature2: 'Gestiona empresas, usuarios y permisos', 
                                feature3: 'Consulta, visualiza y exporta reportes según filtros, accesible desde cualquier dispositivo', 
                            }
                        }
                        images = {
                            { 
                                image1: '/assets/images/projects/ose_1.png', 
                                image2: '/assets/images/projects/ose_2.png', 
                                image3: '/assets/images/projects/ose_3.png', 
                            }
                        }
                    />
                    <Project_Right
                        subTitle = {'Aplicación web'}
                        title = {'Gestión de Almacén de Minerales'}
                        description = {'Maneja las transacciones de materiales aduaneros.'}
                        features = {
                            { 
                                feature1: 'Gestión de bookings, ingresos de minerales, integrado con las ADUANAS', 
                                feature2: 'Recepción y despacho de vehículos de transporte', 
                                feature3: 'Consulta, visualiza y exporta reportes según filtros, accesible desde cualquier dispositivo', 
                            }
                        }
                        images = {
                            { 
                                image1: '/assets/images/projects/alm_1.png', 
                                image3: '/assets/images/projects/alm_3.png', 
                            }
                        }
                    />
                </div>
            </section>
        </>
    )
}