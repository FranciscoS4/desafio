import React, { useState, useEffect } from 'react'

import {
  Container
} from './styles'

import { DataTable } from '../../Components/DataTable'
import { columns } from '../../Components/DataTable/Constants';
import usePhotos, { Photo } from '../../hooks/usePhoto';

import RefreshIcon from '@material-ui/icons/RefreshOutlined';
import { Button} from '@material-ui/core';
import useModal from '../../hooks/useModal';
import Modal from '../../Components/Modal';

interface PhotoProps {
  id: string;
  thumbnailUrl: string;
  title: string;
}

interface ImageProps {
  props: {
    alt: string,
    src: string
  }
}

export const Home: React.FC = () => {

  const [ page, setPage ] = useState<number>(1);

  const [data, setData] = useState<Photo[]>([])

  const { photos, getPhotos, loading } = usePhotos();

  const { isOpen, toggle } = useModal();

  const [ photoDetail, setPhotoDetail] = useState<PhotoProps>();

  useEffect(() => {
    getPhotos({ page: 1, limit: 10 })
  }, [])

  useEffect(() => {
    setData(state => [...state, ...photos])
  }, [photos])

  const loadPhotos = () => {
    getPhotos({ page: page + 1, limit: 10 })
    setPage(state => ++state)
  }

  const showModal = (data: string[] | ImageProps[]) => {
    toggle()
    console.log(data)
    const [ id, imageProps, title] = data
    const { props: { src }} = imageProps as ImageProps
    setPhotoDetail({
      id: String(id),
      title: String(title),
      thumbnailUrl: src })
  }

  return (
    <Container>
      <Button
        title="Carregar mais fotos"
        variant="contained"
        color="default"
        onClick={() => loadPhotos()}
        startIcon={<RefreshIcon/>}
      >
        Carregar
      </Button>
      <DataTable
        tableTitle="Photos"
        data={data}
        columns={columns}
        loading={loading}
        onRowClick={rowData => showModal(rowData)}
      />
      <Modal idPhoto={photoDetail?.id} isOpen={isOpen} hide={toggle} title={photoDetail?.title} thumbnail_url={photoDetail?.thumbnailUrl}></Modal>
    </Container>
  )
}
