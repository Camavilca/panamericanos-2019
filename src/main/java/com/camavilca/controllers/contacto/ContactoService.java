package com.camavilca.controllers.contacto;

import com.camavilca.model.Panamericano;
import java.util.List;

public interface ContactoService {

    void save(Panamericano panamericano);

    List<Panamericano> all();

    void delete(Panamericano panamericano);

}
