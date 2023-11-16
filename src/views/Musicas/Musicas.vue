<template>
  <main>
    <el-collapse>
      <el-collapse-item title="- Filtros" name="1">
        <div>
          <el-form label-position="top" label-width="100px" :model="filtros">
            <el-row>
              <el-col :span="24">
                <el-form-item label="Texto">
                  <el-input v-model="filtros.texto" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="Cantor(a)">
                  <el-select v-model="filtros.cantor" multiple placeholder="Selecione" style="width: 100%;">
                    <el-option label="Tamires" value="Tamires" />
                    <el-option label="Nyêdja" value="Nyêdja" />
                    <el-option label="Rogério" value="Rogério" />
                    <el-option label="Dedé" value="Dedé" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="Status">
                  <el-select v-model="filtros.status" multiple placeholder="Selecione" style="width: 100%;">
                    <el-option label="Tá pegada" value="Tá pegada" />
                    <el-option label="Em progresso" value="Em progresso" />
                    <el-option label="Pra pegar" value="Pra pegar" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>

    <br />

    <el-table :data="musicasFiltradas" v-loading="carregandoMusicas" v-horizontal-scroll max-height="500">
      <el-table-column v-if="!telaPequena" label="Cifra" :width="100" type="expand">
        <template #default="props">
          <cifra :musicaProp="props.row" :tomInicial="props.row.tom" />
        </template>
      </el-table-column>
      <el-table-column align="center" width="250" label="Nome" prop="nome" />
      <el-table-column v-if="telaPequena" label="Detalhes" width="80" type="expand">
        <template #default="props">
          <div class="container_detalhes">
            <span>Cantor(a): {{ props.row.cantor }}</span>
            <span>Trecho: {{ props.row.trecho }}</span>
            <span>Status: <el-tag :type="coresTags[props.row.status]" disable-transitions>{{ props.row.status }}</el-tag></span>
          </div>
          <cifra :musicaProp="props.row" :tomInicial="props.row.tom" :telaPequena="true" />
        </template>
      </el-table-column>
      <el-table-column align="center" width="120" label="Cantor(a)" prop="cantor" v-if="!telaPequena" />
      <el-table-column align="center" width="120" label="Tom" prop="tom" v-if="!telaPequena" />
      <el-table-column align="center" width="120" label="Status" prop="status" v-if="!telaPequena">
        <template #default="scope">
          <el-tag :type="coresTags[scope.row.status]" disable-transitions>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" width="500" label="Trecho" prop="trecho" v-if="!telaPequena" />
    </el-table>
  </main>
</template>

<style scoped>
.container_detalhes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script src="./MusicasCtrl" />
