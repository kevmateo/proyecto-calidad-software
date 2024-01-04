package com.proyecto.proyectocalidad.Repositories;

import com.proyecto.proyectocalidad.Models.DiccionaryModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiccionaryRepository extends CrudRepository<DiccionaryModel,Long> {

}
