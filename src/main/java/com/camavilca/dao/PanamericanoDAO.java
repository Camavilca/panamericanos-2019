package com.camavilca.dao;

import com.camavilca.model.Panamericano;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PanamericanoDAO extends JpaRepository<Panamericano, Long> {

    @Query(value = "SELECT * FROM panamericano u WHERE u.nombre = ?1", nativeQuery = true)
    List<Panamericano> findContacto(String nombre);
}
