<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", priority="-1", defaults={"reactRouting": null}, requirements={"reactRouting"=".+"})
     */

    public function index()
    {
        return $this->render('layout.html.twig');
    }
}
