import Link from "next/link";
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
  
export default function Section5() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        toast.success('Datos enviados correctamente!', {
            duration: 4000
        });
    };
    return (
        <> 
            <Toaster />
            <section className="section background-grey spdt spdtb" id="contacto">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">CONTACTO</div>
                        <h2 className="heading-title size-l">Envíenos un mensaje</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact-form layout-01">
                                <div className="heading">
                                    <h2 className="heading-title">Formulario de contacto</h2>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="first_name">Nombres*</label>
                                                <input type="text" name="first_name" id="first_name" placeholder="Ingrese sus nombres"  {...register("first_name", {required: true, maxLength: 80})} />
                                                {errors.first_name?.type === 'required' && <p role="alert">Nombres es requerido</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="last_name">Apellidos*</label>
                                                <input type="text" name="last_name" id="last_name" placeholder="Ingrese sus apellidos" {...register("last_name", {required: true, maxLength: 100})} />
                                                {errors.last_name?.type === 'required' && <p role="alert">Apellidos es requerido</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="work_email">Correo*</label>
                                                <input type="text" name="email" id="email" placeholder="Ingrese su correo electrónico" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                                {errors.email?.type === 'required' && <p role="alert">Correo es requerido</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="phone_number">Teléfono</label>
                                                <input type="text" name="phone" id="phone" placeholder="Ingrese su número telefónico" {...register("phone", {maxLength: 12})} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-input field-textarea">
                                                <label htmlFor="message">Mensaje*</label>
                                                <textarea name="message" id="message" cols={30} rows={5} placeholder="Escriba su mensaje" defaultValue={""}  {...register("message", {required: true, maxLength: 998})} />
                                                {errors.message?.type === 'required' && <p role="alert">Mensaje es requerido</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="mb8">Al enviar el mensaje, confirma que está conforme con nuestra <Link href="/politica-privacidad" title="Política de Privacidad" rel="noopener noreferrer" target="_blank">Política de Privacidad</Link></p>
                                            <div className="field-submit">
                                                <input type="submit" defaultValue="Enviar Mensaje" name="submit" value={'Enviar Mensaje'} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-content">
                                <div className="heading">
                                    <h2 className="heading-title">Datos de contacto</h2>
                                    <div className="heading-desc">Puede comunicarse directamente</div>
                                </div>
                                <div className="contact-boxs">
                                    <div className="row mb24">
                                        <div className="col-md-12">
                                            <div className="contact-box">
                                                <Link href="/tel:1-335-670-6542" title="Call us" className="background-navy">Teléfono<span>+051 999 999 999</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="contact-box">
                                                <Link href="/mailto:hello@uxper.co" title="Email us" className="background-dark">Correo<span>email@dominio.com</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}